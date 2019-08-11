import { read } from '../components/api/Api';
import { ASSET_RESOURCE }  from '../config';
import { DESELECT_ASSET, FETCH_ASSET, NEW_ASSET, UPDATE_SELECTED_ASSET, UPLOAD_IS_NEW } from './types';
import { START_LOADING, STOP_LOADING } from './types';

export const fetchAsset = id => async dispatch => {
  try {
    dispatch({ type: START_LOADING });

    const response = await read(id, ASSET_RESOURCE);

    dispatch({
      type: FETCH_ASSET,
      payload: response
    });

    dispatch({ type: STOP_LOADING });
  } catch (error) {
    return error;
  }
};

export const newAsset = () => async (dispatch, getState) => {
  try {
    const asset = getState().selectedAsset;

    dispatch({
      type: UPLOAD_IS_NEW
    })

    dispatch({
      type: NEW_ASSET,
      payload: asset
    });
  } catch (error) {
    return error;
  }
};

export const deselectAsset = () => dispatch => {
  dispatch({
    type: DESELECT_ASSET,
    payload: { }
  });
};

export const updateSelectedAsset = property => dispatch => {
  dispatch({
    type: UPDATE_SELECTED_ASSET,
    payload: property
  });
}
