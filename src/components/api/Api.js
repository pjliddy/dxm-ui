const API_BASE_URL = 'https://kiuhmwwxi4.execute-api.us-east-1.amazonaws.com/dxm-api';

const create = (body, resource, params) => {
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

const index = (resource) => {
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

const read = (id, resource) => {
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

const update = (body, resource) => {
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

const destroy = (id, resource) => {
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

module.exports = {
  create,
  index,
  read,
  update,
  destroy
};
