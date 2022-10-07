import { noteType } from '../models/note.type';
export interface UseGetNotesType {
  error: string | null;
  isLoading: boolean;
  notes: noteType[];
}
