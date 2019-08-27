import { API_BASE_URL }  from '../../config/constants';
import {
  startLoading,
  stopLoading,
} from '../../actions';

// convert to axios since it's used for progress on uploads

export const create = (resource, body, params) => {
  const url = new URL(`${API_BASE_URL}/${resource}`);
  // POST includes params for getSignedUrl for S3 authentication
  url.search = new URLSearchParams(params);

  return fetch(url, {
      method: 'POST',
      body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
};

export const index = resource => {
  // dispatch(startLoading());

  return fetch(`${API_BASE_URL}/${resource}`)
    .then(response => response.json())
    // .then(dispatch(stopLoading()))
    .then(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
};

export const read = (resource, id) => {
  return fetch(`${API_BASE_URL}/${resource}/${id}`)
    .then(response => response.json())
    .then(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
};

export const update = (resource, body) => {
  return fetch(`${API_BASE_URL}/${resource}/${body.id}`, {
      method: 'PUT',
      body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
};

export const destroy = (resource, id) => {
  return fetch(`${API_BASE_URL}/${resource}/${id}`, {
      method: 'DELETE'
  })
    .then(response => response.json())
    .then(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
};
