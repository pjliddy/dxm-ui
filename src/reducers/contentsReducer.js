import { INITIAL_CONTENTS_STATE } from '../config';
import {
  CREATE_CONTENT,
  DELETE_CONTENT,
  FETCH_CONTENTS,
  UPDATE_CONTENT
} from '../actions/types';

export default (state = INITIAL_CONTENTS_STATE, action) => {
  switch (action.type) {
    case FETCH_CONTENTS:
      // sort by name for now
      const sortFunction = (a, b) => {
        return (a.title.toLowerCase() > b.title.toLowerCase())
          ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0)
      };

      return action.payload.sort((a,b) => sortFunction(a,b));
    case CREATE_CONTENT:
      return [...state , action.payload];
    case UPDATE_CONTENT:
      return state.map(c => c.id === action.payload.id ? action.payload : c);
    case DELETE_CONTENT:
      return state.filter(c => c.id !== action.payload.id);
    default:
      return state;
  }
};
