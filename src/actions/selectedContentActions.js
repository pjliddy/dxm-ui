import Api from '../components/api/Api';
import { CONTENT_RESOURCE }  from '../config';

export const fetchContent = (id) => async (dispatch) => {
  const response = await Api.read(id, CONTENT_RESOURCE);

  dispatch({
    type: 'FETCH_CONTENT',
    payload: response
  });
};

export const deselectContent = () => async (dispatch) => {
  dispatch({
    type: 'DESELECT_CONTENT',
    payload: { }
  })
};
