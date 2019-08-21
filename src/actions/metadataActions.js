import {
  START_LOADING,
  START_REDIRECT,
  STOP_LOADING,
  STOP_REDIRECT
} from '../config';

export const startLoading = () => {
  return { type: START_LOADING };
};

export const stopLoading = () => {
  return { type: STOP_LOADING };
};

export const startRedirect = () => {
  return { type: START_REDIRECT };
};

export const stopRedirect = () => {
  return { type: STOP_REDIRECT };
};
