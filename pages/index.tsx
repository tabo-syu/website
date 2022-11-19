import Panel from '@/components/common/Panel';
import Panels from '@/components/common/Panels';
import MainVisual from '@/components/MainVisual';
import Heading from '@/components/posts/Heading';
import Layout from '@/layouts/common/WithoutHeaderLayout';
import TopLayout from '@/layouts/Layout';
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
      <MainVisual />
      <TopLayout>
        <Heading>最新記事</Heading>
        <Panels>
          {props.posts.map((post) => (
            <Panel key={post.slug} {...post} />
          ))}
        </Panels>
      </TopLayout>
    </>
  );
};

Page.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await loadPosts(basePostsDir)).map(async (post) => {
    const source = await compile(post.content);

    return { slug: post.slug, meta: source.frontmatter };
  });

  return {
    props: {
      posts: (await Promise.all(posts)).slice(0, 3),
    },
  };
};

export default Page;
