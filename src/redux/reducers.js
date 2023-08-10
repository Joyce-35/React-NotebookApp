import { combineReducers } from 'redux';

function notes(state = [], action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'UPDATE_NOTE':
      return state.map(note =>
        note.id === action.payload.id ? action.payload : note
      );
    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.payload);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  notes
});

export default rootReducer;
