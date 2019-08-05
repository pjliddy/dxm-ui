// move to import

const initialContentState = {
  id: '',
  dataType: 'content',
  title: '',
  subTitle: '',
  copyText: '',
  dateCreated: '',
  dateModified: ''
};

export default (state = initialContentState, action) => {
  switch (action.type) {
    case 'FETCH_CONTENT':
      return action.payload;
    case 'NEW_CONTENT':
      return action.payload;
    case 'DESELECT_CONTENT':
      return initialContentState;
    case 'UPDATE_SELECTED_CONTENT':
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state;
  }
};
