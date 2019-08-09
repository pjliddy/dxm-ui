import { combineReducers } from 'redux';
import assetsReducer from './assetsReducer';
import contentsReducer from './contentsReducer';
import metadataReducer from './metadataReducer';
import selectedContentReducer from './selectedContentReducer';
import selectedAssetReducer from './selectedAssetReducer';
import uploadReducer from './uploadReducer';

export default combineReducers({
  assets: assetsReducer,
  contents: contentsReducer,
  metadata: metadataReducer,
  selectedAsset: selectedAssetReducer,
  selectedContent: selectedContentReducer,
  upload: uploadReducer
});
