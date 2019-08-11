import * as api from '../components/api/Api';
import axios from 'axios';
import uuid from 'uuid/v4';

import { createAsset, updateAsset, updateSelectedAsset } from './'
import { ASSET_RESOURCE, ASSET_REPO_BUCKET } from '../config';
import {
  DESELECT_UPLOAD_FILE,
  GET_PRESIGNED_URL,
  SELECT_UPLOAD_FILE,
  SET_UPLOAD_PROGRESS,
  START_UPLOAD,
  STOP_UPLOAD,
  UPLOAD_FILE,
  UPLOAD_IS_NEW
} from './types';

export const selectUploadFile = fileObj => dispatch => {
  dispatch({
    type: SELECT_UPLOAD_FILE,
    payload: fileObj
  });
};

export const deselectUploadFile = () => {
  return { type: DESELECT_UPLOAD_FILE };
};

export const startUpload = () => (dispatch, getState) => {
  dispatch({ type: START_UPLOAD });
  dispatch(getPresignedUrl(getState().upload.fileObj));
};

export const getPresignedUrl = fileObj => async (dispatch, getState) => {
  try {
    // if state.selectedAsset has id, use it or else generate one
    const id = (getState().selectedAsset.id) ? getState().selectedAsset.id : uuid();

    dispatch(updateSelectedAsset({ 'name': 'id', 'value': id }));

    const s3Params = {
      'Bucket': ASSET_REPO_BUCKET,
      'Key':  `${ASSET_RESOURCE}/${id}/${fileObj.name}`,
      'ACL': 'public-read',
      'ContentType': fileObj.type
    };
    const urlParams = { getSignedUrl: true };
    const { uploadURL }= await api.create(s3Params, ASSET_RESOURCE, urlParams);

    dispatch({
      type: GET_PRESIGNED_URL,
      payload: { uploadURL, id }
    });

    dispatch(uploadFile(fileObj, uploadURL));

  } catch (error) {
    // handle errors
    console.log(error);
    return error;
  }
};

export const uploadFile = (fileObj, uploadUrl) => async dispatch => {
  try {
    const config = {
      headers: {
        'ACL': 'public-read',
        'Content-Type': fileObj.type
      },
      onUploadProgress: progressEvent => {
        dispatch({
          type: SET_UPLOAD_PROGRESS,
          payload: Number.parseInt(progressEvent.loaded / fileObj.size * 100, 10)
        });
      }
    };

    const response = await axios.put(uploadUrl, fileObj, config);
    const fileUrl = response.config.url.split('?')[0];

    dispatch({
      type: UPLOAD_FILE,
      payload: fileUrl
    });

    dispatch(updateAssetUpload(fileObj, fileUrl));
  } catch (error) {
    // handle errors
    console.log(error);
    return error;
  }
};

export const updateAssetUpload = (fileObj, url) => dispatch => {
  const fileData = {
    name: fileObj.name,
    size: fileObj.size,
    type: fileObj.type
  };
  dispatch(updateSelectedAsset({ 'name': 'file', 'value': fileData }));
  dispatch(updateSelectedAsset({ 'name': 'url', 'value': url }));

  dispatch(stopUpload());
}

export const stopUpload = () => async (dispatch, getState) => {
  try {
    dispatch({ type: STOP_UPLOAD });

    const asset = getState().selectedAsset;

    getState().upload.isNew
      ? await dispatch(createAsset(asset))
      : await dispatch(updateAsset(asset));

    dispatch(deselectUploadFile());
  } catch (error) {
    return error;
  }
};

export const uploadIsNew = () => {
  return { type: UPLOAD_IS_NEW };
};
