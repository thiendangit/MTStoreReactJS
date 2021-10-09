import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { HomePage } from '../HomePage/HomePage';
import { ProductDetail } from '../../components/ProductDetail/ProductDetail';

export const LinkPage: React.FC = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/" />;
        }}
        component={HomePage}
      />
      <Route path="/product" component={ProductDetail} />
      <Route />
      <Route />
    </Switch>
  );
};
