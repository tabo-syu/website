import { H1, H2, H3, H4, H5, H6, P } from '@/components/Article';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
};

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = (props) => {
  return (
    <article>
      <MDXProvider components={components}>{props.children}</MDXProvider>
    </article>
  );
};

export default Layout;
