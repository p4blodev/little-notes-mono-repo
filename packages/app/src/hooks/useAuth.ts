import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../context';
import { useMutation } from '@tanstack/react-query';
import { credentialsType } from '../models/credentials.types';
import { postLogin } from '../services/login';
import { UseAuthType } from './useAuth.types';

export default function useAuth(): UseAuthType {
  const { auth, setAuth, logout } = useContext<AuthContextType>(AuthContext);

  const { mutate, error } = useMutation(
    async (credentials: credentialsType) => await postLogin(credentials),
    {
      onSuccess: (data) => {
        const authentication = {
          ...data,
          authenticated: true,
        };

        setAuth(authentication);
      },
      onError: () => {
        logout();
      },
    },
  );

  function login(credentials: credentialsType) {
    mutate(credentials);
  }

  return { auth, error, login, logout };
}
