// set default state to empty array
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ASSETS':
      return action.payload;
    case 'DELETE_ASSET':
      return state.filter(asset => asset.id !== action.payload.id);
    default:
      return state;
  }
};
