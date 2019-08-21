import * as api from '../components/api/Api';
import { CONTENT_RESOURCE }  from '../config';
import { DESELECT_CONTENT, FETCH_CONTENT, NEW_CONTENT, UPDATE_SELECTED_CONTENT } from '../config';
import { START_LOADING, STOP_LOADING } from '../config';

export const fetchContent = id => async dispatch => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.read(id, CONTENT_RESOURCE);

    dispatch({
      type: FETCH_CONTENT,
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
