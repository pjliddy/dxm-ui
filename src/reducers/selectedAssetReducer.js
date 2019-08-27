import { INITIAL_SELECTED_ASSET_STATE } from '../config/initialStates';
import {
  DESELECT_ASSET,
  GET_ASSET,
  NEW_ASSET,
  UPDATE_SELECTED_ASSET
} from '../config/actionTypes';

export default (state = INITIAL_SELECTED_ASSET_STATE, action) => {
  switch (action.type) {
    case GET_ASSET:
      return action.payload;
    case NEW_ASSET:
      return INITIAL_SELECTED_ASSET_STATE;
    case DESELECT_ASSET:
      return INITIAL_SELECTED_ASSET_STATE;
    case UPDATE_SELECTED_ASSET:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state;
  }
};
