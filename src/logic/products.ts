import { AxiosResponse } from 'axios';
import clientRequest from '../utils/clientRequest';
interface ProductsParams {
  category?: string;
  search?: string;
}

export const fetchProductsList = async (): Promise<AxiosResponse> => {
  return clientRequest.post(`products`);
};

export const fetchProducts = async (params: ProductsParams): Promise<AxiosResponse> => {
  return clientRequest.get(`products`, {
    params,
  });
};
