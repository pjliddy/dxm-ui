// set default state to empty array
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ASSETS':
      return action.payload;
    case 'CREATE_ASSET':
        return [...state , action.payload];
    case 'UPDATE_ASSET':
      return state.map(a => a.id === action.payload.id ? action.payload : a);
    case 'DELETE_ASSET':
      return state.filter(asset => asset.id !== action.payload.id);
    default:
      return state;
  }
};
