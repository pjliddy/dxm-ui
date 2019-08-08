import * as api from '../api/Api';
import axios from 'axios';
import { ASSET_RESOURCE, ASSET_REPO_BUCKET } from '../../config';
import { updateSelectedAsset } from '../../actions';

export const getPresignedUrl = async (file) => {
  const s3Params = {
    'Bucket': ASSET_REPO_BUCKET,
    'Key':  `${ASSET_RESOURCE}/${file.name}`,
    'ACL': 'public-read',
    'ContentType': file.type
  };
  const urlParams = { getSignedUrl: true };
  const response = await api.create(s3Params, ASSET_RESOURCE, urlParams);

  return response;
}

export const uploadAsset = async (uploadUrl, file) => {
  try {
    // post file to presigned URL
    const config = {
      headers: {
        'ACL': 'public-read',
        'Content-Type': file.type
      },
      onUploadProgress: progressEvent => {
        const progress = Number.parseInt(progressEvent.loaded / file.size * 100, 10);

        // set to state value

        console.log(`Progress: ${progress}%`);
      }
    }

    const response = await axios.put(uploadUrl, file, config);
    const url = response.config.url.split('?')[0];

    return url;
  } catch (error) {
    return error;
  }
}

// make this an action
export const updateAssetFile = (url, fileObj) => dispatch => {
  const fileData = {
    name: fileObj.name,
    size: fileObj.size,
    type: fileObj.type
  };
  dispatch(updateSelectedAsset({ 'name': 'file', 'value': fileData }));
  dispatch(updateSelectedAsset({ 'name': 'url', 'value': url }));

}
