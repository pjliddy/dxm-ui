// set default state to empty array
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NODES':
      return action.payload;
    default:
      return state;
  }
};
