// set default state to empty array
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CONTENTS':
      // sort by name for now
      const sortFunction = (a, b) => (a.title.toLowerCase() > b.title.toLowerCase())
        ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0);
      return action.payload.sort((a,b) => sortFunction(a,b));
    case 'CREATE_CONTENT':
      return [...state , action.payload];
    case 'UPDATE_CONTENT':
      return state.map(c => c.id === action.payload.id ? action.payload : c);
    case 'DELETE_CONTENT':
      return state.filter(c => c.id !== action.payload.id);
    default:
      return state;
  }
};
