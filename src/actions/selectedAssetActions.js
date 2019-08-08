import { read } from '../components/api/Api';
import { ASSET_RESOURCE }  from '../config';
import { DESELECT_ASSET, FETCH_ASSET, NEW_ASSET, UPDATE_SELECTED_ASSET } from './types';
import { START_LOADING, STOP_LOADING } from './types';

export const fetchAsset = (id) => async (dispatch) => {
  dispatch({ type: START_LOADING });

  const response = await read(id, ASSET_RESOURCE);

  dispatch({
    type: FETCH_ASSET,
    payload: response
  });

  dispatch({ type: STOP_LOADING });
};

export const newAsset = () => async (dispatch, getState) => {
  const asset = getState().selectedAsset;

  dispatch({
    type: NEW_ASSET,
    payload: asset
  });
};

export const deselectAsset = () => async (dispatch) => {
  dispatch({
    type: DESELECT_ASSET,
    payload: { }
  });
};

export const updateSelectedAsset = ( prop ) => async (dispatch) => {
  dispatch({
    type: UPDATE_SELECTED_ASSET,
    payload: prop
  });
}
