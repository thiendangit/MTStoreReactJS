import React from 'react';
import { Switch, Route as MyRouter } from 'react-router-dom';
import { HomePage, CartPage, ProductDetailPage, CheckoutPage } from '@pages';

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
      <MyRouter path="/product" component={ProductDetailPage} />
      <MyRouter path="/cart" component={CartPage} />
      <MyRouter path="/checkout" component={CheckoutPage} />
    </Switch>
  );
};
