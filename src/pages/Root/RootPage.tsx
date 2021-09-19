import React from 'react';
// @ts-ignore
import {
  Navbar,
  Header,
  MenuBar,
  Category,
  ProductList,
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
      <Footer />
    </div>
  );
};

export default RootPage;
