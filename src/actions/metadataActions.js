import { START_LOADING, STOP_LOADING } from './types';

export const startLoading = () => async (dispatch) => {
  dispatch({
    type: START_LOADING,
    payload: { isLoading: true }
  });
};

export const stopLoading = () => async (dispatch) => {
  dispatch({
    type: START_LOADING,
    payload: { isLoading: true }
  });
};
