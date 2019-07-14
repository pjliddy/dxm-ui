const API_BASE_URL = 'https://icvdl0i8ol.execute-api.us-east-1.amazonaws.com/nodes/';

export const contentCreate = (item) => {
  return fetch(`${API_BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify(item)
  })
    .then(
      (response) => {
        console.log(`contentCreate: ${JSON.stringify(response)}`);
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
}

export const contentIndex = () => {
  return fetch(`${API_BASE_URL}`)
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
  return fetch(`${API_BASE_URL}/${id}`)
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
  return fetch(`${API_BASE_URL}/${item.id}`, {
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
  return fetch(`${API_BASE_URL}/${id}`, {
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
