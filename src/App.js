import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

function App() {
  const [noteToEdit, setNoteToEdit] = useState(null);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Notebook App</h1>
        <NoteForm noteToEdit={noteToEdit} setNoteToEdit={setNoteToEdit} />
        <NoteList setNoteToEdit={setNoteToEdit} />
      </div>
    </Provider>
  );
}

export default App;
