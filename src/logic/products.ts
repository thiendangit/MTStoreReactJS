import { AxiosResponse } from 'axios';
import clientRequest from '../utils/clientRequest';

export const fetchProductsList = async (): Promise<AxiosResponse> => {
  return clientRequest.get(`products`);
};
