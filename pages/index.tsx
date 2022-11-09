import Layout from '@/layouts/layout';
import type { NextPageWithLayout } from '@/pages/_app';
import type { ReactElement } from 'react';

const Page: NextPageWithLayout = () => {
  return <div>Page</div>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
