import * as api from '../components/api/Api';
import { CONTENT_RESOURCE }  from '../config/constants';
import {
  DESELECT_CONTENT,
  GET_CONTENT,
  NEW_CONTENT,
  START_LOADING,
  STOP_LOADING,
  UPDATE_SELECTED_CONTENT
} from '../config/actionTypes';

export const getContent = id => async dispatch => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.read(CONTENT_RESOURCE, id);

    dispatch({
      type: GET_CONTENT,
      payload: response
    });

    dispatch({ type: STOP_LOADING });
  } catch (error) {
    // handle errors
    console.log(error);
    return error;
  }
};

export const newContent = () => (dispatch, getState) => {
  // const content = getState().selectedContent;

  dispatch({
    type: NEW_CONTENT,
    payload: getState().selectedContent
  });
};

export const deselectContent = () => dispatch => {
  dispatch({ type: DESELECT_CONTENT });
};

export const updateSelectedContent = property => dispatch => {
  dispatch({
    type: UPDATE_SELECTED_CONTENT,
    payload: property
  });
}
