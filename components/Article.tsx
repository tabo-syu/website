'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

const Article: React.FC<MDXRemoteProps> = (mdx) => {
  return (
    <article>
      <MDXRemote {...mdx} />
    </article>
  );
};

export default Article;
