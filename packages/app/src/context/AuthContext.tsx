import React, { useEffect, useState } from 'react';
import { AuthContextType } from './AuthContext.types';
import { authType } from '../models/auth.types';

const INITIAL_DATA: authType = {
  authenticated: false,
  userId: '',
  token: '',
  username: '',
};

const storedAuth = window.sessionStorage.getItem('auth');
const authObj = storedAuth ? JSON.parse(storedAuth) : INITIAL_DATA;

export const AuthContext = React.createContext<AuthContextType>({
  auth: authObj,
  setAuth: () => null,
  logout: () => null,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<authType>(authObj);

  useEffect(() => {
    window.sessionStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  const logout = () => {
    setAuth(INITIAL_DATA);
  };

  const values: AuthContextType = {
    auth,
    setAuth,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
