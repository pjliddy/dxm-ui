import { INITIAL_SELECTED_ASSET_STATE } from '../config';
import {
  DESELECT_ASSET,
  FETCH_ASSET,
  NEW_ASSET,
  UPDATE_SELECTED_ASSET
} from '../config';

export default (state = INITIAL_SELECTED_ASSET_STATE, action) => {
  switch (action.type) {
    case FETCH_ASSET:
      return action.payload;
    case NEW_ASSET:
      return INITIAL_SELECTED_ASSET_STATE;
    case DESELECT_ASSET:
      return INITIAL_SELECTED_ASSET_STATE;
    case UPDATE_SELECTED_ASSET:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state;
  }
};
