import { noteType } from '../models/note.type';

export interface UseCreateNoteType {
  createNote: (note: string) => void;
  error: string | null;
  newNote?: noteType;
}
