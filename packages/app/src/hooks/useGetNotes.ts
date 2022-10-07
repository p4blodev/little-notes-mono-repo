import { useQuery } from '@tanstack/react-query';
import { noteType } from '../models/note.type';
import { getNotes } from '../services/notes';
import { UseGetNotesType } from './useGetNotes.types';
import { QueryKeysEnum } from './QUERY_KEYS';

export default function useGetNotes(): UseGetNotesType {
  const { data, error, isLoading } = useQuery<noteType[], string>(
    [QueryKeysEnum.notes],
    getNotes,
    {
      initialData: [],
    },
  );

  return { error, isLoading, notes: data };
}
