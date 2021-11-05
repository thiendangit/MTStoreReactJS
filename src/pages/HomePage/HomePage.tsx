import React from 'react';
import { Category, ProductList, FeedBack, BlogPost, MenuBar } from '@components';

export const HomePage: React.FC = () => {
  return (
    <>
      <MenuBar />
      <Category />
      <ProductList />
      <FeedBack />
      <BlogPost />
    </>
  );
};
