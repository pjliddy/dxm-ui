import Api from '../components/api/Api';
import { CONTENT_RESOURCE }  from '../config';

export const fetchNodes = () => async (dispatch) => {
  const response = await Api.index(CONTENT_RESOURCE);

  dispatch({
    type: 'FETCH_NODES',
    payload: response.filter(node => node.dataType === 'content')
  });
};

// have API delete return id as confirmation?

export const deleteNode = (id) => async (dispatch) => {
  console.log(`deleteNode action`);
  
  await Api.destroy(id, CONTENT_RESOURCE);

  dispatch({
    type: 'DELETE_NODE',
    payload: { id: id }
  });
};
