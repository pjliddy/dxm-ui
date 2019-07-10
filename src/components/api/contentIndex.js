import axios from 'axios';

export default axios.create({
  baseURL: 'https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-index'
});

// export default axios.create({
//   baseURL: 'https://www.googleapis.com/youtube/v3',
//   params: {
//     part: 'snippet',
//     maxResults: 5,
//     key: KEY
//   }
// });

/*
  index: https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-index
  read: https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-read?id=16bd31be1af
  create: https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-create?title="New Postman Title"
  delete: https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-delete?id=16bd825e80c
  update: https://kpuw6vo7wg.execute-api.us-east-1.amazonaws.com/default/dxm-lambda-content-update?id=16bd31be1af&title=New Content Title
*/
