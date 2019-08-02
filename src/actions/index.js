import Api from '../api/Api';
import { ASSETS_RESOURCE, CONTENT_RESOURCE }  from '../config';

// Action creator that returns a function
export const fetchNodes = () => async (dispatch) => {
  const response = await Api.index(CONTENT_RESOURCE);

  dispatch({
    type: 'FETCH_NODES',
    payload: response.data
  });
};

export const fetchAssets = () => async (dispatch) => {
  const response = await Api.index(ASSETS_RESOURCE);

  dispatch({
    type: 'FETCH_ASSETS',
    payload: response.data
  });
};
