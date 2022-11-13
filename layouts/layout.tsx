import GlobalFooter from '@/components/common/GlobalFooter';
import GlobalHeader from '@/components/common/GlobalHeader';
import { Noto_Sans_JP } from '@next/font/google';
import React from 'react';

const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['japanese'],
});

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = (props) => {
  return (
    <div className={noto.className}>
      <div className='sticky top-0'>
        <GlobalHeader />
      </div>
      <div>
        <main>{props.children}</main>
      </div>
      <div>
        <GlobalFooter />
      </div>
    </div>
  );
};

export default Layout;
