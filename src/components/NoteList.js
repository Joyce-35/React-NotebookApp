import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../redux/actions';


const NoteList = ({ notes, deleteNote, setNoteToEdit }) => {
    return (
      <div>
        <h2>Note List</h2>
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              <strong> Title: {note.title}</strong>
              <p>Date: {note.date}</p>
              <h3>Notes</h3>
              <p>{note.text}</p>
              <button onClick={() => setNoteToEdit(note)} className='but'>Edit</button>
              <button onClick={() => deleteNote(note.id)}className='but'>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps, { deleteNote })(NoteList);
