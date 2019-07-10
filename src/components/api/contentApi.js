import axios from 'axios';

export const contentIndex = () => {
  return axios.get('https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-index');
}

export const contentRead = (id) => {
  return axios.get('https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-read', {
    params: {
      id: id
    }
  });
}

export const contentUpdate = (item) => {
  console.log(`contentUpdate: ${JSON.stringify(item)}`);
  return axios.put('https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-update', item);
}

export const contentCreate = (item) => {
  console.log(`contentCreate: ${JSON.stringify(item)}`);

  return axios.post('https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-create', item);
}

export const contentDelete = (id) => {
  console.log(`contentDelete: ${JSON.stringify(id)}`);

  return axios.delete('https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-delete', {
    params: {
      id: id
    }
  });
}

/*
  index: https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-index
  read: https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-read?id=16bd31be1af
  create: https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-create?title="New Postman Title"
  delete: https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-delete?id=16bd825e80c
  update: https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-update?id=16bd31be1af&title=New Content Title
*/
