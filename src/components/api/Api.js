import { API_BASE_URL }  from '../../config/constants';
import axios from 'axios';

// import {
//   startLoading,
//   stopLoading,
// } from '../../actions';

export const create = async (resource, body, params) => {
  // POST can include params (getSignedUrl: true) for S3 authentication
  try {
    const url = new URL(`${API_BASE_URL}/${resource}`);
    url.search = new URLSearchParams(params);
    const { data } = await axios.post(url, JSON.stringify(body),params);

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

export const update = async (resource, body, params) => {
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
