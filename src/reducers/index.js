import { combineReducers } from 'redux';
import assetsReducer from './assetsReducer';
import contentsReducer from './contentsReducer';
import selectedContentReducer from './selectedContentReducer';
import selectedAssetReducer from './selectedAssetReducer';

export default combineReducers({
  assets: assetsReducer,
  contents: contentsReducer,
  selectedAsset: selectedAssetReducer,
  selectedContent: selectedContentReducer
});
