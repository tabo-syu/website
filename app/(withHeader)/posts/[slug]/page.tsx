import Article from '@/components/model/post/Article';
import NarrowContainer from '@/components/ui/NarrowContainer';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams(): Props['params'][] {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default function Page({ params }: Props) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <NarrowContainer>
      <Article post={post} />
    </NarrowContainer>
  );
}
