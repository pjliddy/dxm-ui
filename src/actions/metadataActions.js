import {
  START_LOADING,
  START_REDIRECT,
  STOP_LOADING,
  STOP_REDIRECT
} from '../config/actionTypes';

export const startLoading = () => dispatch => {
  dispatch({ type: START_LOADING });
  // return { type: START_LOADING };
};

export const stopLoading = () => dispatch => {
  dispatch({ type: STOP_LOADING });
  // return { type: STOP_LOADING };
};

export const startRedirect = () => dispatch => {
  dispatch({ type: START_REDIRECT });
  // return { type: START_REDIRECT };
};

export const stopRedirect = () => dispatch => {
  dispatch({ type: STOP_REDIRECT });
  // return { type: STOP_REDIRECT };
};
