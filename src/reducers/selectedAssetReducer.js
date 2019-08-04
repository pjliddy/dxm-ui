export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ASSET':
      return action.payload;
    case 'DESELECT_ASSET':
      return action.payload;
    default:
      return state;
  }
};
