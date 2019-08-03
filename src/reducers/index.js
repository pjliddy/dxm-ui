import { combineReducers } from 'redux';
import assetsReducer from './assetsReducer';
import contentsReducer from './contentsReducer';
import selectedContentReducer from './selectedContentReducer';

export default combineReducers({
  assets: assetsReducer,
  contents: contentsReducer,
  selectedContent: selectedContentReducer
});
