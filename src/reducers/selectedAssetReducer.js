import { INITIAL_ASSET_STATE } from '../config';

export default (state = INITIAL_ASSET_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ASSET':
      return action.payload;
    case 'NEW_ASSET':
        return action.payload;
    case 'DESELECT_ASSET':
      return INITIAL_ASSET_STATE;
    case 'UPDATE_SELECTED_ASSET':
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state;
  }
};
