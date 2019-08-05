import Api from '../components/api/Api';
import { ASSET_RESOURCE }  from '../config';

export const fetchAsset = (id) => async (dispatch) => {
  const response = await Api.read(id, ASSET_RESOURCE);

  dispatch({
    type: 'FETCH_ASSET',
    payload: response
  });
};

export const newAsset = () => async (dispatch, getState) => {
  const asset = getState().selectedAsset;

  dispatch({
    type: 'NEW_ASSET',
    payload: asset
  });
};

export const deselectAsset = () => async (dispatch) => {
  dispatch({
    type: 'DESELECT_ASSET',
    payload: { }
  });
};

export const updateSelectedAsset = ( prop ) => async (dispatch) => {
  dispatch({
    type: 'UPDATE_SELECTED_ASSET',
    payload: prop
  });
}
