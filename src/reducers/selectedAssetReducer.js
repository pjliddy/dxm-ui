const initialAssetState = {
  id: '',
  dataType: 'asset',
  title: '',
  dateCreated: '',
  dateModified: '',
  url: '',
  file: { }
};

export default (state = initialAssetState, action) => {
  switch (action.type) {
    case 'FETCH_ASSET':
      return action.payload;
    case 'DESELECT_ASSET':
      return action.payload;
    case 'UPDATE_SELECTED_ASSET':
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state;
  }
};
