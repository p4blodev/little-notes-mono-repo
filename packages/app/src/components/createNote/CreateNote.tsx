import { useState } from 'react';
import useCreateNote from '../../hooks/useCreateNote';
import './CreateNote.css';

export default function CreateNote() {
  const { createNote, error } = useCreateNote();
  const [note, setNote] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (note) createNote(note);
  };

  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    setNote(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="create-note-input-container">
        <input
          className="create-note-input"
          type="text"
          value={note}
          onChange={onChangeInput}
        />
      </div>
      <div className="create-note-button-container">
        <button className="button-13">Add</button>
      </div>
      {error && <span style={{ color: 'red' }}>{`${error} 😢`}</span>}
    </form>
  );
}
