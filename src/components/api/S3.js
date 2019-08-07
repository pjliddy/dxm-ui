import Api from '../api/Api';
import axios from 'axios';
import { ASSET_RESOURCE, ASSET_REPO_BUCKET, ASSET_REPO_PATH } from '../../config';
import { updateSelectedAsset } from '../../actions';

export const getPresignedUrl = async (file) => {
  const s3Params = {
    'Bucket': ASSET_REPO_BUCKET,
    'Key':  `${ASSET_REPO_PATH}/${file.name}`,
    'ACL': 'public-read',
    'ContentType': file.type
  };
  const urlParams = { getSignedUrl: true };
  const response = await Api.create(s3Params, ASSET_RESOURCE, urlParams);

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

export const updateAssetFile = (url, fileObj) => {
  const fileData = {
    name: fileObj.name,
    size: fileObj.size,
    type: fileObj.type
  };

  updateSelectedAsset({ 'name': 'file', 'value': fileData });
  updateSelectedAsset({ 'name': 'url', 'value': url });

  return;
}
