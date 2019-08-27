import { INITIAL_ASSETS_STATE } from '../config/initialStates';
import {
  CREATE_ASSET,
  DELETE_ASSET,
  FETCH_ASSETS,
  UPDATE_ASSET
} from '../config/actionTypes';

export default (state = INITIAL_ASSETS_STATE, action) => {
  switch (action.type) {
    case FETCH_ASSETS:
      // sort by name for now
      const sortFunction = (a, b) => {
        return (a.title.toLowerCase() > b.title.toLowerCase())
          ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0)
      };

      return action.payload.sort((a,b) => sortFunction(a,b));
    case CREATE_ASSET:
      return [...state, action.payload];
    case UPDATE_ASSET:
      return state.map(a => a.id === action.payload.id ? action.payload : a );
    case DELETE_ASSET:
      return state.filter(a => a.id !== action.payload.id);
    default:
      return state;
  }
};
