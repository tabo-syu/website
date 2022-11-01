import { Noto_Sans_JP } from '@next/font/google';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['japanese'],
  preload: true,
});

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = (props) => {
  return (
    <html lang='ja' className={noto.className}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </html>
  );
};

export default Layout;
