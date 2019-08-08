import { INITIAL_METADATA_STATE } from '../config';
import { START_LOADING, STOP_LOADING } from '../actions/types';

export default (state = INITIAL_METADATA_STATE, action) => {
  switch (action.type) {
    case START_LOADING:
    return { ...state, [action.payload.isLoading]: action.payload.isLoading }
    case STOP_LOADING:
    return { ...state, [action.payload.isLoading]: action.payload.isLoading }
    default:
      return state;
  }
};
