import { TOKEN } from '../conts';

export const getToken = () => {
  const token = localStorage.getItem(TOKEN);

  return token ?? '';
};

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

export const dropToken = () => {
  localStorage.removeItem(TOKEN);
};
