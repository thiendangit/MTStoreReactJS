import { AxiosResponse } from 'axios';
import clientRequest from '../utils/clientRequest';

export const fetchCategories = async (): Promise<AxiosResponse> => {
  return clientRequest.get(`products/categories`);
};
