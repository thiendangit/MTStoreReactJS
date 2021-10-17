import React, { useEffect } from 'react';
import { useDispatch } from '@store/configureStore';
import { fetchProducts } from '@logic';
import { onSetProducts, onSetLoadingProducts } from '@store/reducers/productsSlice';
import { ProductDetail } from '../components/ProductDetail/ProductDetail';

const ProductAPI: React.FC = () => {
  const dispatch = useDispatch();
  const _fetchProducts = async () => {
    try {
      const result = await fetchProducts();
      dispatch(onSetLoadingProducts());
      if (result.data) {
        dispatch(onSetProducts(result.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    _fetchProducts();
  }, []);

  return null;
};
