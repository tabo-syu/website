import GlobalFooter from '@/components/common/GlobalFooter';
import GlobalHeader from '@/components/common/GlobalHeader';
import { noto } from '@/lib/font';
import React from 'react';

type Props = {
  children: React.ReactNode;
};
const WithHeaderLayout: React.FC<Props> = (props) => {
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

export default WithHeaderLayout;
