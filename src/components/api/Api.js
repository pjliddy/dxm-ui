const API_BASE_URL = 'https://kiuhmwwxi4.execute-api.us-east-1.amazonaws.com/dxm-api';

const create = (resource, body) => {
  return fetch(`${API_BASE_URL}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(body)
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
}

// export const create = (resource, item) => {
//   return fetch(`${API_BASE_URL}/${resource}`, {
//       method: 'POST',
//       body: JSON.stringify(item)
//   })
//     .then(
//       (response) => {
//         console.log(`contentCreate: ${JSON.stringify(response)}`);
//         return response;
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
// }

// export const list = (resource) => {
//   return fetch(`${API_BASE_URL}/${resource}`)
//     .then(response => response.json())
//     .then(
//       (response) => {
//         return response;
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
// }

// export const read = (resource, id) => {
//   return fetch(`${API_BASE_URL}/${resource}/${id}`)
//     .then(response => response.json())
//     .then(
//       (response) => {
//         return response;
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
// }

// export const update = (resource, item) => {
//   return fetch(`${API_BASE_URL}/${resource}/${item.id}`, {
//       method: 'PUT',
//       body: JSON.stringify(item)
//   })
//     .then(
//       (response) => {
//         return response;
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
// }

// export const destroy = (resource, id) => {
//   return fetch(`${API_BASE_URL}/${resource}/${id}`, {
//       method: 'DELETE'
//   })
//     .then(
//       (response) => {
//         return response;
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
// }
