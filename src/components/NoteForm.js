import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNote, updateNote } from '../redux/actions';
import '../App.css';

const NoteForm = ({ addNote, updateNote, noteToEdit, setNoteToEdit }) => {
  const [note, setNote] = useState(noteToEdit || { title: '', date: '', text: '' });

  const handleSubmit = e => {
    e.preventDefault();
    if (note.id) {
      updateNote(note);
    } else {
      addNote({
        ...note,
        id: new Date().getTime(),
      });
    }
    setNoteToEdit(null);
    setNote({ title: '', date: '', text: '' });
  };

  return (
    <div>
      <h2>Note Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={note.title}
          onChange={e => setNote({ ...note, title: e.target.value })}
        />
        <input
          type="date"
          value={note.date}
          onChange={e => setNote({ ...note, date: e.target.value })}
        />
        <textarea
          placeholder="Note text"
          value={note.text}
          onChange={e => setNote({ ...note, text: e.target.value })}
        />
        <button type="submit" className='btn'>{note.id ? 'Update' : 'Add'}</button>
        {note.id && (
          <button type="button" onClick={() => setNoteToEdit(null)} >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default connect(null, { addNote, updateNote })(NoteForm);
