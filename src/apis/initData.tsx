import React, { useEffect } from 'react';
import { useDispatch } from '@store/configureStore';
import { fetchCategories } from '../logic/categories';
import { onSetCategories, onSetLoading } from '@store/reducers/categoriesSlice';

export const CallAPI: React.FC = () => {
  const dispatch = useDispatch();
  const _fetchCategories = async () => {
    try {
      const result = await fetchCategories();
      dispatch(onSetLoading());
      if (result.data) {
        dispatch(onSetCategories(result.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    _fetchCategories();
  }, []);

  return null;
};
