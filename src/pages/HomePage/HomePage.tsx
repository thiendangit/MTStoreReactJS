import React from 'react';
import { Category, ProductList, FeedBack, BlogPost } from '@components';

export const HomePage: React.FC = () => {
  return (
    <>
      <Category />
      <ProductList />
      <FeedBack />
      <BlogPost />
    </>
  );
};
