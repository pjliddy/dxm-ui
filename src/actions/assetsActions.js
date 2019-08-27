import * as api from '../components/api/Api';

import { ASSET_RESOURCE }  from '../config/constants';
import {
  CREATE_ASSET,
  DELETE_ASSET,
  LIST_ASSETS,
  START_LOADING,
  START_REDIRECT,
  STOP_LOADING,
  UPDATE_ASSET
} from '../config/actionTypes';

export const listAssets = () => async dispatch => {
  try {
    // add to API wrapper?
    dispatch({ type: START_LOADING });

    const response = await api.index(ASSET_RESOURCE);

    dispatch({
      type: LIST_ASSETS,
      payload: response.filter(node => node.resourceType === ASSET_RESOURCE)
    });

    dispatch({ type: STOP_LOADING });

  } catch (error) {
    // handle errors; dipatch to state?
    console.log(error);
    return error;
  }
};

export const createAsset = () => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const asset = getState().selectedAsset;
    const response = await api.create(ASSET_RESOURCE, asset);

    dispatch({
      type: CREATE_ASSET,
      payload: response
    });

    dispatch({ type: STOP_LOADING });
    dispatch({ type: START_REDIRECT });
  } catch (error) {
    // handle errors
    console.log(error);
    return error;
  }
};

export const updateAsset = () => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const asset = getState().selectedAsset;
    const response = await api.update(ASSET_RESOURCE, asset);

    dispatch({
      type: UPDATE_ASSET,
      payload: response
    });

    dispatch({ type: STOP_LOADING });
    dispatch({ type: START_REDIRECT });
  } catch (error) {
    // handle errors
    console.log(error);
    return error;
  }
};

export const deleteAsset = id => async dispatch => {
  try {
    dispatch({ type: START_LOADING });

    await api.destroy(ASSET_RESOURCE, id);

    dispatch({
      type: DELETE_ASSET,
      payload: { id }
    });

    dispatch({ type: STOP_LOADING });
  } catch (error) {
    // handle errors
    console.log(error);
    return error;
  }

};
