import { AxiosResponse } from 'axios';
import clientRequest from '../utils/clientRequest';
interface ProductsParams {
  category?: string;
  search?: string;
  tags?: string[];
  include?: string;
}

export const fetchProductsList = async (): Promise<AxiosResponse> => {
  return clientRequest.post(`products`);
};
export const fetchProductById = async (id: number): Promise<AxiosResponse> => {
  return clientRequest.get(`products/${id}`);
};
export const fetchProductTag = async (): Promise<AxiosResponse> => {
  return clientRequest.get(`products/tags`);
};
export const fetchProducts = async (params: ProductsParams): Promise<AxiosResponse> => {
  return clientRequest.get(`products`, {
    params,
  });
};
