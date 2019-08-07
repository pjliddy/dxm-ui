import Api from '../components/api/Api';
import { CONTENT_RESOURCE }  from '../config';
import { CREATE_CONTENT, DELETE_CONTENT, FETCH_CONTENTS, UPDATE_CONTENT } from './types';

export const fetchContents = () => async (dispatch) => {
  const response = await Api.index(CONTENT_RESOURCE);

  dispatch({
    type: FETCH_CONTENTS,
    payload: response.filter(content => content.dataType === 'content')
  });
};

export const createContent = (content) => async (dispatch) => {
  const response = await Api.create(content, CONTENT_RESOURCE);

  dispatch({
    type: CREATE_CONTENT,
    payload: response
  });
};

export const updateContent = () => async (dispatch, getState) => {
  const content = getState().selectedContent;
  const response = await Api.update(content, CONTENT_RESOURCE);

  dispatch({
    type: UPDATE_CONTENT,
    payload: response
  });
};

// have API delete return id as confirmation?

export const deleteContent = (id) => async (dispatch) => {
  await Api.destroy(id, CONTENT_RESOURCE);

  dispatch({
    type: DELETE_CONTENT,
    payload: { id }
  });
};
