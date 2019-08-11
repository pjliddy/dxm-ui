import { INITIAL_METADATA_STATE } from '../config';
import {
  START_LOADING,
  STOP_LOADING,
  START_REDIRECT,
  STOP_REDIRECT
} from '../actions/types';

export default (state = INITIAL_METADATA_STATE, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case STOP_LOADING:
      return { ...state, isLoading: false }
      case START_REDIRECT:
        return { ...state, redirect: true }
      case STOP_REDIRECT:
        return { ...state, redirect: false }
    default:
      return state;
  }
};
