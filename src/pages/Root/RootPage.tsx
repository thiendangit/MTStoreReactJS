import React from 'react';
// @ts-ignore
import {
  Navbar,
  Header,
  MenuBar,
  Category,
  ProductList,
  FeedBack,
  BlogPost,
  Footer,
} from '@components';
const RootPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MenuBar />
      <Category />
      <ProductList />
      <FeedBack />
      <BlogPost />
      <Footer />
    </div>
  );
};

export default RootPage;
