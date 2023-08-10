import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../redux/actions';

const Note = ({ note, updateNote, setNoteToEdit }) => {
  const handleEditClick = () => {
    setNoteToEdit(note);
  };

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.date}</p>
      <p>{note.text}</p>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default connect(null, { updateNote })(Note);
