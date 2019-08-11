import * as api from '../components/api/Api';

import { CONTENT_RESOURCE }  from '../config';
import {
  CREATE_CONTENT,
  DELETE_CONTENT,
  FETCH_CONTENTS,
  START_LOADING,
  START_REDIRECT,
  STOP_LOADING,
  UPDATE_CONTENT
} from './types';

export const fetchContents = () => async dispatch => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.index(CONTENT_RESOURCE);

    dispatch({
      type: FETCH_CONTENTS,
      payload: response.filter(content => content.resourceType === CONTENT_RESOURCE)
    });

    dispatch({ type: STOP_LOADING });
  } catch (error) {
    // handle errors
    console.log(error);
    return error;
  }
};

export const createContent = () => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const content = getState().selectedContent;
    const response = await api.create(content, CONTENT_RESOURCE);

    dispatch({
      type: CREATE_CONTENT,
      payload: response
    });

    dispatch({ type: STOP_LOADING });
    dispatch({ type: START_REDIRECT });
  } catch (error) {
    // handle errors
    console.log(error);
    return error;
  }
};

export const updateContent = () => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const content = getState().selectedContent;
    const response = await api.update(content, CONTENT_RESOURCE);

    dispatch({
      type: UPDATE_CONTENT,
      payload: response
    });

    dispatch({ type: STOP_LOADING });
    dispatch({ type: START_REDIRECT });
  } catch (error) {
    // handle errors
    console.log(error);
    return error;
  }
};

export const deleteContent = id => async dispatch => {
  try {
    dispatch({ type: START_LOADING });

    await api.destroy(id, CONTENT_RESOURCE);

    dispatch({
      type: DELETE_CONTENT,
      payload: { id }
    });

    dispatch({ type: STOP_LOADING });
  } catch (error) {
    // handle errors
    console.log(error);
    return error;
  }
};
