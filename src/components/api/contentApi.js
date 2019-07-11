import axios from 'axios';

const API_BASE_URL = 'https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default';
const API_CREATE = '/dxm-lambda-content-create';
const API_INDEX = '/dxm-lambda-content-index';
const API_READ = '/dxm-lambda-content-read';
const API_UPDATE = '/dxm-lambda-content-update';
const API_DELETE = '/dxm-lambda-content-delete';

export const contentCreate = (item) => {
  console.log(`contentCreate: ${JSON.stringify(item)}`);
  return axios.post(`${API_BASE_URL}${API_CREATE}`, item);
}

export const contentIndex = () => {
  return axios.get(`${API_BASE_URL}${API_INDEX}`);
}

export const contentRead = (id) => {
  return axios.get(`${API_BASE_URL}${API_READ}`, {
    params: {
      id: id
    }
  });
}

export const contentUpdate = (item) => {
  console.log(`contentUpdate: ${JSON.stringify(item)}`);
  return axios.put(`${API_BASE_URL}${API_UPDATE}`, item);
}

export const contentDelete = (id) => {
  console.log(`contentDelete: ${JSON.stringify(id)}`);

  return axios.delete(`${API_BASE_URL}${API_DELETE}`, {
    params: {
      id: id
    }
  });
}
