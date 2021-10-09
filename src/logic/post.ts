import { AxiosResponse } from 'axios';
import clientRequestNormal from '@utils/clientRequestNormal';

export const fetchPostList = async (): Promise<AxiosResponse> => {
  return clientRequestNormal.get(`posts?per_page=10&context=embed`, {});
};
