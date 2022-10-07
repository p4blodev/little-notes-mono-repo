import { noteType } from '../../models/note.type';
import useUpdateNote from '../../hooks/useUpdateNote';
import './Note.css';

export default function Note({ note }: { note: noteType }) {
  const { changeImportant } = useUpdateNote();

  const toggleImportant = () => {
    changeImportant(note);
  };

  const handleDelete = () => {};

  return (
    <li className="note">
      {note.date != null && (
        <header className="header-note">
          <time>{new Date(note.date).toDateString()}</time>
          <span>{` - ${note.important ? '🚦' : '🚥'}`}</span>
        </header>
      )}
      <p> {note.content}</p>
      <hr className="divider" />
      <div>
        <button className="note-button" onClick={toggleImportant}>
          {note.important ? '🚥' : '🚦'}
        </button>
        <button className="note-button" onClick={handleDelete}>
          ❌
        </button>
      </div>
      <hr className="divider" />
    </li>
  );
}
