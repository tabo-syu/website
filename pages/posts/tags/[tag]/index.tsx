import Panel from '@/components/common/Panel';
import Panels from '@/components/common/Panels';
import Heading from '@/components/posts/Heading';
import Layout from '@/layouts/common/WithHeaderLayout';
import ArticleList from '@/layouts/posts/Layout';
import { compile, Meta } from '@/lib/mdx';
import { basePostsDir, getTags, loadPosts } from '@/lib/posts';
import type { NextPageWithLayout } from '@/pages/_app';
import { GetStaticPaths, GetStaticProps } from 'next';
import type { ReactElement } from 'react';

type PageProps = {
  tag: string;
  posts: {
    slug: string;
    meta: Meta;
  }[];
};
const Page: NextPageWithLayout<PageProps> = (props) => {
  return (
    <>
      <Heading>{`${props.tag}タグ 記事一覧`}</Heading>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getTags(basePostsDir);
  const paths = tags.map((tag) => ({
    params: { tag },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.tag !== 'string') {
    return { notFound: true };
  }
  const tag = params.tag;

  const posts = (await loadPosts(basePostsDir)).map(async (post) => {
    const slug = post.slug;
    const source = await compile(post.content);
    return { slug, meta: source.frontmatter };
  });

  const filteredPosts = (await Promise.all(posts)).filter((post) =>
    post.meta?.tags?.includes(tag)
  );

  return {
    props: {
      tag: tag,
      posts: filteredPosts,
    },
  };
};

export default Page;
