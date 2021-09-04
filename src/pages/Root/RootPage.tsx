import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProductsList } from '../../logic/products';

const RootPage: React.FC = () => {
  const [products, setProducts] = useState([]);

  const getProductsList = async () => {
    try {
      const result = await fetchProductsList();
      setProducts(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <>
      {products?.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
    </>
  );
};

export default RootPage;
