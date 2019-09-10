import axios from 'axios';
import { API_BASE_URL }  from '../../config/constants';
import {
  SET_UPLOAD_PROGRESS
} from '../../config/actionTypes';

// import {
//   startLoading,
//   stopLoading,
// } from '../../actions';

export const create = async (resource, body, params) => {
  // POST can include params (getSignedUrl: true) for S3 authentication
  try {
    const url = new URL(`${API_BASE_URL}/${resource}`);
    url.search = new URLSearchParams(params);
    const { data } = await axios.post(url, body);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const index = async (resource) => {
  try {
    const url = `${API_BASE_URL}/${resource}`;
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const read = async (resource, id) => {
  try {
    const url = `${API_BASE_URL}/${resource}/${id}`;
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const update = async (resource, body) => {
  try {
    const url = new URL(`${API_BASE_URL}/${resource}/${body.id}`);
    const { data } = await axios.put(url, JSON.stringify(body));

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const destroy = async (resource, id) => {
  try {
    const url = `${API_BASE_URL}/${resource}/${id}`;
    const { data } = await axios.delete(url);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const upload = async (uploadUrl, fileObj, dispatch) => {
  try {
    const params = {
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

    const response = await axios.put(uploadUrl, fileObj, params);
    const fileUrl = response.config.url.split('?')[0];

    return fileUrl;
  } catch (error) {
    console.log(error);
    return error;
  }
};
