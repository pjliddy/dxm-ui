const API_BASE_URL = 'https://kiuhmwwxi4.execute-api.us-east-1.amazonaws.com/dxm-api';

const create = (resource, body) => {
  return fetch(`${API_BASE_URL}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(body)
  })
    .then(
      (response) => {
        console.log(`api.create(): ${JSON.stringify(response)}`);
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
};

const list = (resource) => {
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

const read = (resource, id) => {
  return fetch(`${API_BASE_URL}/${resource}/${id}`)
    .then(response => response.json())
    .then(
      (response) => {
        console.log(`api.read(): ${JSON.stringify(response)}`);
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
};

const update = (resource, body) => {
  return fetch(`${API_BASE_URL}/${resource}/${body.id}`, {
      method: 'PUT',
      body: JSON.stringify(body)
  })
    .then(
      (response) => {
        console.log(`api.update(): ${JSON.stringify(response)}`);
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
};

const destroy = (resource, id) => {
  return fetch(`${API_BASE_URL}/${resource}/${id}`, {
      method: 'DELETE'
  })
    .then(
      (response) => {
        console.log(`api.destroy(): ${JSON.stringify(response)}`);
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
};


module.exports = {
  create,
  list,
  read,
  update,
  destroy
};