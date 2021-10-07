import React from 'react';
// @ts-ignore
import { Navbar, Header, MenuBar, Category, ProductList, FeedBack, BlogPost, Footer } from '@components';
import { CallAPI } from '../../apis/initData';

const RootPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/*<MenuBar />*/}
      {/*<Category />*/}
      {/*<ProductList />*/}
      {/*<FeedBack />*/}
      <BlogPost />
      {/*<Footer />*/}
      {/*<CallAPI />*/}
    </div>
  );
};

export default RootPage;
