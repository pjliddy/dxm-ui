import * as api from '../components/api/Api';
import { ASSET_RESOURCE }  from '../config';
import { CREATE_ASSET, DELETE_ASSET, FETCH_ASSETS, UPDATE_ASSET } from './types';
import { START_LOADING, STOP_LOADING } from './types';

export const fetchAssets = () => async (dispatch) => {
  dispatch({ type: START_LOADING });

  const response = await api.index(ASSET_RESOURCE);

  dispatch({
    type: FETCH_ASSETS,
    payload: response.filter(node => node.dataType === 'asset')
  });

  dispatch({ type: STOP_LOADING });
};

export const createAsset = (asset) => async (dispatch) => {
  dispatch({ type: START_LOADING });

  // expand with file upload stuff
  const response = await api.create(asset, ASSET_RESOURCE);

  dispatch({
    type: CREATE_ASSET,
    payload: response
  });

  dispatch({ type: STOP_LOADING });
};

export const updateAsset = (asset) => async (dispatch, getState) => {
  dispatch({ type: START_LOADING });

  const asset = getState().selectedAsset;
  const response = await api.update(asset, ASSET_RESOURCE);

  dispatch({
    type: UPDATE_ASSET,
    payload: response
  });

  dispatch({ type: STOP_LOADING });
};

export const deleteAsset = (id) => async (dispatch) => {
  dispatch({ type: START_LOADING });

  await api.destroy(id, ASSET_RESOURCE);

  dispatch({
    type: DELETE_ASSET,
    payload: { id: id }
  });

  dispatch({ type: STOP_LOADING });
};
