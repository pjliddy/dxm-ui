import * as api from '../components/api/Api';

import { ASSET_RESOURCE } from '../config';
import {
  DESELECT_ASSET,
  FETCH_ASSET,
  NEW_ASSET,
  START_LOADING,
  STOP_LOADING,
  UPDATE_SELECTED_ASSET,
  UPLOAD_IS_NEW
} from '../config';

export const fetchAsset = id => async dispatch => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.read(id, ASSET_RESOURCE);

    dispatch({
      type: FETCH_ASSET,
      payload: response
    });

    dispatch({ type: STOP_LOADING });
  } catch (error) {
    // handle errors
    console.log(error);
    return error;
  }
};

export const newAsset = () => async (dispatch, getState) => {
  try {
    dispatch({ type: UPLOAD_IS_NEW });
    dispatch({
      type: NEW_ASSET,
      payload: getState().selectedAsset
    });
  } catch (error) {
    // handle errors
    console.log(error);
    return error;
  }
};

export const deselectAsset = () => dispatch => {
  dispatch({ type: DESELECT_ASSET });
};

export const updateSelectedAsset = property => dispatch => {
  dispatch({
    type: UPDATE_SELECTED_ASSET,
    payload: property
  });
}
