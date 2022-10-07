import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putNote } from '../services/notes';
import { noteType } from '../models/note.type';
import { UseCreateNoteType } from './useUpdateNote.types';

export default function useUpdateNote(): UseCreateNoteType {
  const queryClient = useQueryClient();
  const { mutate, error } = useMutation<noteType, string, noteType>(
    async (note: noteType) => await putNote(note),
    {
      onSuccess: async (newNote: noteType) => {
        const prevNotes: noteType[] =
          queryClient.getQueryData<noteType[]>(['notes']) ?? [];

        const filteredNotes = prevNotes.filter(
          (current: noteType) => current.id !== newNote.id,
        );

        filteredNotes.push(newNote);

        filteredNotes.sort((a: noteType, b: noteType) => {
          if (a.id && b.id) {
            return a.id - b.id;
          }
          return 0;
        });

        queryClient.setQueryData<noteType[]>(['notes'], [...filteredNotes]);
      },
    },
  );

  function changeImportant(note: noteType) {
    const important = !note.important;
    const updatedNote = { ...note, important };

    mutate(updatedNote);
  }

  return { changeImportant, error };
}
