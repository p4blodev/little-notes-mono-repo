import { authType } from '../models/auth.types';
import { credentialsType } from '../models/credentials.types';

export interface UseAuthType {
  auth: authType;
  error: unknown;
  login: (credentials: credentialsType) => void;
  logout: () => void;
}
