import * as api from '../components/api/Api';
import { ASSET_RESOURCE } from '../config/constants';
import {
  DESELECT_ASSET,
  GET_ASSET,
  NEW_ASSET,
  START_LOADING,
  STOP_LOADING,
  UPDATE_SELECTED_ASSET,
  UPLOAD_IS_NEW
} from '../config/actionTypes';

export const getAsset = id => async dispatch => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.read(ASSET_RESOURCE, id);

    dispatch({
      type: GET_ASSET,
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
      type: NEW_ASSET
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
