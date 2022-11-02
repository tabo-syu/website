import { Noto_Sans_JP } from '@next/font/google';
import React from 'react';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';
import Main from '../components/Main';
import '../styles/globals.css';

const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['japanese'],
});

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = (props) => {
  return (
    <html lang='ja' className={noto.className}>
      <div className='sticky top-0'>
        <GlobalHeader />
      </div>
      <div className='mx-auto max-w-4xl'>
        <Main>{props.children}</Main>
      </div>
      <div>
        <GlobalFooter />
      </div>
    </html>
  );
};

export default Layout;
