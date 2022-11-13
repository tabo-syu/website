import {
  A,
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Hr,
  Img,
  Li,
  Ol,
  P,
  Table,
  Td,
  Th,
  THead,
  Tr,
  Ul,
} from '@/components/posts/slug/Article';
import Tag from '@/components/posts/Tag';
import Tags from '@/components/posts/Tags';
import Layout from '@/layouts/Layout';
import Article from '@/layouts/posts/slug/Layout';
import { compile, CompileResult } from '@/lib/mdx';
import { basePostsDir, getSlugs, loadPost } from '@/lib/posts';
import type { NextPageWithLayout } from '@/pages/_app';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import type { ReactElement } from 'react';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  a: A,
  img: Img,
  ul: Ul,
  ol: Ol,
  li: Li,
  table: Table,
  thead: THead,
  tr: Tr,
  th: Th,
  td: Td,
  blockquote: Blockquote,
  code: Code,
  hr: Hr,
};

type PageProps = {
  slug: string;
  source: CompileResult;
};
const Page: NextPageWithLayout<PageProps> = (props) => {
  return (
    <>
      <h1 className='mb-10 text-4xl font-bold'>
        {props.source.frontmatter?.title}
      </h1>
      <div className='mb-6'>
        <Tags>
          {props.source.frontmatter?.tags?.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </Tags>
      </div>
      <MDXRemote
        compiledSource={props.source.compiledSource}
        components={components}
      />
    </>
  );
};

Page.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <Article>{page}</Article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getSlugs(basePostsDir);
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.slug !== 'string') {
    return { notFound: true };
  }

  const post = await loadPost(basePostsDir, params.slug);
  if (!post.content) {
    return { notFound: true };
  }

  return {
    props: {
      slug: post.slug,
      source: await compile(post.content),
    },
  };
};

export default Page;
