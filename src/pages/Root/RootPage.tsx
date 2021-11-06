import React from 'react';
import { Navbar, Header, Footer } from '@components';
import { CallAPI } from '../../apis/initData';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { LinkPage } from '@pages';

const RootPage: React.FC = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Header />
        {/*<MenuBar />*/}
        <LinkPage />
        <Footer />
        <CallAPI />
      </Container>
    </Router>
  );
};

export default RootPage;
