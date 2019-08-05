import Api from '../components/api/Api';
import { CONTENT_RESOURCE }  from '../config';

export const fetchContents = () => async (dispatch) => {
  const response = await Api.index(CONTENT_RESOURCE);

  dispatch({
    type: 'FETCH_CONTENTS',
    payload: response.filter(content => content.dataType === 'content')
  });
};

export const createContent = (content) => async (dispatch) => {
  const response = await Api.create(content, CONTENT_RESOURCE);

  dispatch({
    type: 'CREATE_CONTENT',
    payload: response
  });
};

export const updateContent = (content) => async (dispatch, getState) => {
  const content = getState().selectedContent;
  const response = await Api.update(content, CONTENT_RESOURCE);

  dispatch({
    type: 'UPDATE_CONTENT',
    payload: response
  });
};

// have API delete return id as confirmation?

export const deleteContent = (id) => async (dispatch) => {
  await Api.destroy(id, CONTENT_RESOURCE);

  dispatch({
    type: 'DELETE_CONTENT',
    payload: { id }
  });
};
