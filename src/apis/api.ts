import { useEffect } from 'react';
import { useDispatch } from '@store/configureStore';
import { fetchCategories } from '../logic/categories';
import { onSetCategories } from '@store/reducers/categoriesSlice';

export const callAPI = () => {
  const dispatch = useDispatch();
  const _fetchCategories = async () => {
    try {
      const result = await fetchCategories();
      if (result.data) dispatch(onSetCategories(result.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    _fetchCategories();
  }, []);
};
