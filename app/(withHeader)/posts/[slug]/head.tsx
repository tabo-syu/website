import PostHead from '@/components/model/post/PostHead';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};
export default function Head({ params }: Props) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <PostHead post={post} />;
}
