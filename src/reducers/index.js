import { combineReducers } from 'redux';
import nodesReducer from './nodesReducer';
import assetsReducer from './assetsReducer';

export default combineReducers({
  nodes: nodesReducer,
  assets: assetsReducer
});
