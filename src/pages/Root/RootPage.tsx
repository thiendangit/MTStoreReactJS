import React, { useEffect } from 'react';
// import { Navbar, Header, MenuBar, Footer } from '@components';
// import { CallAPI } from '../../apis/initData';
// import { Container } from '@material-ui/core';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { LinkPage } from '../LinkPage/LinkPage';
import { useArray } from '@hooks/useArray';

const RootPage: React.FC = () => {
  const [value, actions] = useArray([
    { id: 222, name: 'tét' },
    { id: 232, name: 'hihi' },
    { id: 221, name: '@@@' },
  ]);
  console.log({ value });

  useEffect(() => {
    // actions
    actions.addOne({ id: 1231, name: 'tét' });
  }, []);

  return (
    <div />
    // <Router>
    //   <Container>
    //     <Navbar />
    //     <Header />
    //     <MenuBar />
    //     <LinkPage />
    //     <Footer />
    //     <CallAPI />
    //   </Container>
    // </Router>
  );
};

export default RootPage;
