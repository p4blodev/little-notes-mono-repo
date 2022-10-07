import axios from 'axios';
import { noteType } from '../models/note.type';

const API_BASE = '/api/notes';

const getConfig = () => {
  const storedAuth = window.sessionStorage.getItem('auth');
  const parseStoredAuth = storedAuth && JSON.parse(storedAuth);

  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${parseStoredAuth.token}`,
    },
  };
};

export const postNote = async (note: noteType) => {
  return await axios
    .post(API_BASE, note)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error('Something went wrong getting notes');
    });
};

export const putNote = async (note: noteType) => {
  return await axios
    .put(`${API_BASE}/${note.id}`, note)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error('Something went wrong getting notes');
    });
};

export const getNotes = async () => {
  const config = getConfig();
  return await axios
    .get(API_BASE, config)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error('Something went wrong getting notes');
    });
};
