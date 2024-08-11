import { api } from './api';

export const getAllCampers = async () => {
  const { data } = await api(`advert`);
  return data;
};
