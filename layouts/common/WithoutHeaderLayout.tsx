import GlobalFooter from '@/components/common/GlobalFooter';
import { noto } from '@/lib/font';
import React from 'react';

type Props = {
  children: React.ReactNode;
};
const WithoutHeaderLayout: React.FC<Props> = (props) => {
  return (
    <div className={noto.className}>
      <div>
        <main>{props.children}</main>
      </div>
      <div>
        <GlobalFooter />
      </div>
    </div>
  );
};

export default WithoutHeaderLayout;
