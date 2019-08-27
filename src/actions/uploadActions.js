import * as api from '../components/api/Api';
import axios from 'axios';
import uuid from 'uuid/v4';

import { createAsset, updateAsset, updateSelectedAsset } from './'
import { ASSET_RESOURCE, ASSET_REPO_BUCKET } from '../config/constants';
import {
  DESELECT_UPLOAD_FILE,
  GET_PRESIGNED_URL,
  SELECT_UPLOAD_FILE,
  SET_UPLOAD_PROGRESS,
  START_UPLOAD,
  STOP_UPLOAD,
  UPLOAD_FILE,
  UPLOAD_IS_NEW
} from '../config/actionTypes';

export const uploadIsNew = () => {
  return { type: UPLOAD_IS_NEW };
};

export const selectUploadFile = fileObj => dispatch => {
  dispatch({
    type: SELECT_UPLOAD_FILE,
    payload: fileObj
  });
};

export const deselectUploadFile = () => {
  return { type: DESELECT_UPLOAD_FILE };
};

export const startUpload = () => async (dispatch, getState) => {
  dispatch({ type: START_UPLOAD });
  await dispatch(getPresignedUrl());
  await dispatch(uploadFile());
  dispatch(updateAssetUpload());
  await dispatch(stopUpload());
  dispatch(deselectUploadFile());
};

export const getPresignedUrl = () => async (dispatch, getState) => {
  try {
    const { fileObj } = getState().upload;
    const assetId = getState().selectedAsset.id;

    // if state.selectedAsset has id, use it or else generate one
    const id = assetId ? assetId : uuid();

    dispatch(updateSelectedAsset({ 'name': 'id', 'value': id }));

    const s3Params = {
      'Bucket': ASSET_REPO_BUCKET,
      'Key':  `${ASSET_RESOURCE}/${id}/${fileObj.name}`,
      'ACL': 'public-read',
      'ContentType': fileObj.type
    };
    const urlParams = { getSignedUrl: true };
    const { uploadURL } = await api.create(ASSET_RESOURCE, s3Params, urlParams);

    dispatch({
      type: GET_PRESIGNED_URL,
      payload: { uploadUrl: uploadURL, id }
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const uploadFile = () => async (dispatch, getState) => {
  try {
    const fileObj = getState().upload.fileObj;
    const uploadUrl = getState().upload.uploadUrl;

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
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateAssetUpload = url => (dispatch, getState) => {
  const { fileUrl, fileObj } = getState().upload;

  const fileData = {
    name: fileObj.name,
    size: fileObj.size,
    type: fileObj.type
  };
  dispatch(updateSelectedAsset({ 'name': 'file', 'value': fileData }));
  dispatch(updateSelectedAsset({ 'name': 'url', 'value': fileUrl }));
}

export const stopUpload = () => async (dispatch, getState) => {
  try {
    dispatch({ type: STOP_UPLOAD });

    const asset = getState().selectedAsset;

    getState().upload.isNew
      ? await dispatch(createAsset(asset))
      : await dispatch(updateAsset(asset));
  } catch (error) {
    return error;
  }
};
