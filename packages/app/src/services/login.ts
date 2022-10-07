import axios from 'axios';
import { credentialsType } from '../models/credentials.types';

const API_BASE = '/api/login';

export const postLogin = async (credentials: credentialsType) => {
  return await axios
    .post(API_BASE, credentials)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};
