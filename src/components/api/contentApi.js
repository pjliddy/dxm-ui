const API_BASE_URL = 'https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default';
const API_CREATE = '/dxm-lambda-content-create';
const API_INDEX = '/dxm-lambda-content-index';
const API_READ = '/dxm-lambda-content-read';
const API_UPDATE = '/dxm-lambda-content-update';
const API_DELETE = '/dxm-lambda-content-delete';

export const contentCreate = (item) => {
  return fetch(`${API_BASE_URL}${API_CREATE}`, {
      method: 'POST',
      body: JSON.stringify(item)
  })
    .then(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
}

export const contentIndex = () => {
  return fetch(`${API_BASE_URL}${API_INDEX}`)
    .then(response => response.json())
    .then(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
}

export const contentRead = (id) => {
  return fetch(`${API_BASE_URL}${API_READ}?id=${encodeURIComponent(id)}`)
    .then(response => response.json())
    .then(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
}

export const contentUpdate = (item) => {
  return fetch(`${API_BASE_URL}${API_UPDATE}`, {
      method: 'PUT',
      body: JSON.stringify(item)
  })
    .then(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
}

export const contentDelete = (id) => {
  return fetch(`${API_BASE_URL}${API_DELETE}?id=${encodeURIComponent(id)}`, {
      method: 'DELETE'
  })
    .then(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
}
