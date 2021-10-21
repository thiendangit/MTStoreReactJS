import React from 'react';
// @ts-ignore
import { Navbar, Header, MenuBar, Category, Footer } from '@components';
import { CallAPI } from '../../apis/initData';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { LinkPage } from '../LinkPage/LinkPage';

const RootPage: React.FC = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Header />
        <MenuBar />
        <LinkPage />
        {/*<Footer />*/}
        <CallAPI />
      </Container>
    </Router>
  );
};

export default RootPage;
