import { INTIAL_CONTENT_STATE } from '../config';

export default (state = INTIAL_CONTENT_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CONTENT':
      return action.payload;
    case 'NEW_CONTENT':
      return action.payload;
    case 'DESELECT_CONTENT':
      return INTIAL_CONTENT_STATE;
    case 'UPDATE_SELECTED_CONTENT':
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state;
  }
};
