import { ENV } from '../env';
import { HttpClient } from './httpClient';

const authenticate = async (token: string): Promise<{ valid: boolean }> => {
  const res = await HttpClient.get(
    `${ENV.AUTHENNTICATION_URL}/token/validate`,
    `access_token=${token}`
  );
  return { valid: true };
};

export const AuthenticationClient = { authenticate };
