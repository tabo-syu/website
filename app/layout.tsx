import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
