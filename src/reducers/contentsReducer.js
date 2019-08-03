// set default state to empty array
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CONTENTS':
      return action.payload;
    case 'UPDATE_CONTENT':
      return state.map(c => c.id === action.payload.id ? action.payload : c);
    case 'DELETE_CONTENT':
      return state.filter(content => content.id !== action.payload.id);
    default:
      return state;
  }
};
