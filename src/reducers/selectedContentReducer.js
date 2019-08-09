import { INITIAL_SELECTED_CONTENT_STATE } from '../config';
import { DESELECT_CONTENT, FETCH_CONTENT, NEW_CONTENT, UPDATE_SELECTED_CONTENT } from '../actions/types';

export default (state = INITIAL_SELECTED_CONTENT_STATE, action) => {
  switch (action.type) {
    case FETCH_CONTENT:
      return action.payload;
    case NEW_CONTENT:
      return action.payload;
    case DESELECT_CONTENT:
      return INITIAL_SELECTED_CONTENT_STATE;
    case UPDATE_SELECTED_CONTENT:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state;
  }
};
