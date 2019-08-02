// set default state to empty array
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NODES':
      return action.payload;
    case 'DELETE_NODE':
      return state.filter(node => node.id !== action.payload.id);
    default:
      return state;
  }
};
