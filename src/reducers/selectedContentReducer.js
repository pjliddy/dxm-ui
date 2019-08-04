export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CONTENT':
      return action.payload;
    case 'DESELECT_CONTENT':
      return action.payload;
    default:
      return state;
  }
};
