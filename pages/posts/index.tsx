import Heading from '@/components/blog/Heading';
import Panel from '@/components/blog/Panel';
import Panels from '@/components/blog/Panels';
import ArticleList from '@/layouts/blog/Layout';
import Layout from '@/layouts/Layout';
import { compile, Meta } from '@/lib/mdx';
import { basePostsDir, loadPosts } from '@/lib/posts';
import type { NextPageWithLayout } from '@/pages/_app';
import { GetStaticProps } from 'next';
import type { ReactElement } from 'react';

type PageProps = {
  posts: {
    slug: string;
    meta: Meta;
  }[];
};
const Page: NextPageWithLayout<PageProps> = (props) => {
  return (
    <>
      <Heading>記事一覧</Heading>
      <Panels>
        {props.posts.map((post) => (
          <Panel key={post.slug} {...post} />
        ))}
      </Panels>
    </>
  );
};

Page.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <ArticleList>{page}</ArticleList>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await loadPosts(basePostsDir)).map(async (post) => {
    const slug = post.slug;
    const source = await compile(post.content);
    return { slug, meta: source.frontmatter };
  });

  return {
    props: {
      posts: await Promise.all(posts),
    },
  };
};

export default Page;
