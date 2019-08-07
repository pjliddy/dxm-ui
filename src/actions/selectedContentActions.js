import Api from '../components/api/Api';
import { CONTENT_RESOURCE }  from '../config';
import { DESELECT_CONTENT, FETCH_CONTENT, NEW_CONTENT, UPDATE_SELECTED_CONTENT } from './types';

export const fetchContent = (id) => async (dispatch) => {
  const response = await Api.read(id, CONTENT_RESOURCE);

  dispatch({
    type: FETCH_CONTENT,
    payload: response
  });
};

export const newContent = () => async (dispatch, getState) => {
  const content = getState().selectedContent;

  dispatch({
    type: NEW_CONTENT,
    payload: content
  });
};

export const deselectContent = () => async (dispatch) => {
  dispatch({
    type: DESELECT_CONTENT,
    payload: { }
  });
};

export const updateSelectedContent = ( prop ) => async (dispatch) => {
  dispatch({
    type: UPDATE_SELECTED_CONTENT,
    payload: prop
  });
}
