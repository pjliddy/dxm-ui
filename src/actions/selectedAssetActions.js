import Api from '../components/api/Api';
import { ASSET_RESOURCE }  from '../config';

export const fetchAsset = (id) => async (dispatch) => {
  const response = await Api.read(id, ASSET_RESOURCE);

  dispatch({
    type: 'FETCH_ASSET',
    payload: response
  });
};

export const deslectAsset = () => async (dispatch) => {
  dispatch({
    type: 'DESELECT_ASSET',
    payload: { }
  })
};
