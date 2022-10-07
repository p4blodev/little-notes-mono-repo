import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postNote } from '../services/notes';
import { noteType } from '../models/note.type';
import { UseCreateNoteType } from './useCreateNote.types';

export default function useCreateNote(): UseCreateNoteType {
  const queryClient = useQueryClient();
  const { mutate, error } = useMutation<noteType, string, noteType>(
    async (note: noteType) => await postNote(note),
    {
      onSuccess: async (newNote: noteType) => {
        const prevNotes = queryClient.getQueryData<noteType[]>(['notes']) ?? [];

        queryClient.setQueryData<noteType[]>(
          ['notes'],
          [...prevNotes, newNote],
        );
      },
    },
  );

  function createNote(noteText: string) {
    const note: noteType = {
      important: false,
      content: noteText,
    };

    mutate(note);
  }

  return { createNote, error };
}
