import { API_BASE_URL }  from '../../config';

// convert to axios since it's used for progress on uploads

// POST includes params for getSignedUrl for S3 authentication
export const create = (body, resource, params) => {
  const url = new URL(`${API_BASE_URL}/${resource}`);
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

export const index = (resource) => {
  return fetch(`${API_BASE_URL}/${resource}`)
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

export const read = (id, resource) => {
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

export const update = (body, resource) => {
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

export const destroy = (id, resource) => {
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
