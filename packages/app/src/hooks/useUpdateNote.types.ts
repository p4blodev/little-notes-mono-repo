import { noteType } from '../models/note.type';

export interface UseCreateNoteType {
  changeImportant: (note: noteType) => void;
  error: string | null;
}
