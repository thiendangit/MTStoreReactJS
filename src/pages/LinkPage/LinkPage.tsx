import React from 'react';
import { Switch, Route as MyRouter } from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';
import { Checkout, ProductDetail, CartPage } from '@components';

export const LinkPage: React.FC = () => {
  return (
    <Switch>
      <MyRouter
        exact
        path="/"
        // render={() => {
        //   return <Redirect to="/" />;
        // }}
        component={HomePage}
      />
      <MyRouter path="/product" component={ProductDetail} />
      <MyRouter path="/cart" component={CartPage} />
      <MyRouter path="/checkout" component={Checkout} />
    </Switch>
  );
};
