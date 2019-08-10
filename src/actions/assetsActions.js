import * as api from '../components/api/Api';
import { ASSET_RESOURCE }  from '../config';
import { CREATE_ASSET, DELETE_ASSET, FETCH_ASSETS, UPDATE_ASSET } from './types';
import { START_LOADING, STOP_LOADING, START_REDIRECT } from './types';

export const fetchAssets = () => async dispatch => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.index(ASSET_RESOURCE);

    dispatch({
      type: FETCH_ASSETS,
      payload: response.filter(node => node.resourceType === ASSET_RESOURCE)
    });

    dispatch({ type: STOP_LOADING });
  } catch (error) {
    return error;
  }
};

export const createAsset = () => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const asset = getState().selectedAsset;
    const response = await api.create(asset, ASSET_RESOURCE);

    dispatch({
      type: CREATE_ASSET,
      payload: response
    });

    dispatch({ type: STOP_LOADING });
    dispatch({ type: START_REDIRECT });
  } catch (error) {
    return error;
  }
};

export const updateAsset = () => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const asset = getState().selectedAsset;
    const response = await api.update(asset, ASSET_RESOURCE);

    dispatch({
      type: UPDATE_ASSET,
      payload: response
    });

    dispatch({ type: STOP_LOADING });
    dispatch({ type: START_REDIRECT });
  } catch (error) {
    return error;
  }
};

export const deleteAsset = id => async dispatch => {
  try {
    dispatch({ type: START_LOADING });

    await api.destroy(id, ASSET_RESOURCE);

    dispatch({
      type: DELETE_ASSET,
      payload: { id: id }
    });

    dispatch({ type: STOP_LOADING });
  } catch (error) {
    return error;
  }

};
