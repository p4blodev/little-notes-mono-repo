import { authType } from '../models/auth.types';

export interface AuthContextType {
  auth: authType;
  logout: () => void;
  setAuth: React.Dispatch<React.SetStateAction<authType>>;
}
