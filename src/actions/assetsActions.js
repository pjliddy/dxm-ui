import Api from '../components/api/Api';
import { ASSET_RESOURCE }  from '../config';

export const fetchAssets = () => async (dispatch) => {
  const response = await Api.index(ASSET_RESOURCE);

  dispatch({
    type: 'FETCH_ASSETS',
    payload: response.filter(node => node.dataType === 'asset')
  });
};

export const createAsset = (asset) => async (dispatch) => {
  const response = await Api.create(asset, ASSET_RESOURCE);

  dispatch({
    type: 'CREATE_ASSET',
    payload: response
  });
};

export const updateAsset = (asset) => async (dispatch) => {
  const response = await Api.update(asset, ASSET_RESOURCE);

  dispatch({
    type: 'UPDATE_ASSET',
    payload: response
  });
};

export const deleteAsset = (id) => async (dispatch) => {
  await Api.destroy(id, ASSET_RESOURCE);

  dispatch({
    type: 'DELETE_ASSET',
    payload: { id: id }
  });
};
