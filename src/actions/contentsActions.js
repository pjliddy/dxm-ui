import * as api from '../components/api/Api';
import { CONTENT_RESOURCE }  from '../config';
import { CREATE_CONTENT, DELETE_CONTENT, FETCH_CONTENTS, UPDATE_CONTENT } from './types';
import { START_LOADING, STOP_LOADING, START_REDIRECT } from './types';

export const fetchContents = () => async (dispatch) => {
  dispatch({ type: START_LOADING });

  const response = await api.index(CONTENT_RESOURCE);

  dispatch({
    type: FETCH_CONTENTS,
    payload: response.filter(content => content.dataType === 'content')
  });

  dispatch({ type: STOP_LOADING });
};

export const createContent = () => async (dispatch, getState) => {
  dispatch({ type: START_LOADING });

  const content = getState().selectedContent;
  const response = await api.create(content, CONTENT_RESOURCE);

  dispatch({
    type: CREATE_CONTENT,
    payload: response
  });

  dispatch({ type: STOP_LOADING });
  dispatch({ type: START_REDIRECT });
};

export const updateContent = () => async (dispatch, getState) => {
  dispatch({ type: START_LOADING });

  const content = getState().selectedContent;
  const response = await api.update(content, CONTENT_RESOURCE);

  dispatch({
    type: UPDATE_CONTENT,
    payload: response
  });

  dispatch({ type: STOP_LOADING });
  dispatch({ type: START_REDIRECT });
};

// have API delete return id as confirmation?

export const deleteContent = (id) => async (dispatch) => {
  dispatch({ type: START_LOADING });

  await api.destroy(id, CONTENT_RESOURCE);

  dispatch({
    type: DELETE_CONTENT,
    payload: { id }
  });

  dispatch({ type: STOP_LOADING });
};
