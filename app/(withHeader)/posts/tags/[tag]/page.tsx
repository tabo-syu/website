import PostList from '@/components/model/post/PostList';
import { H2 } from '@/components/ui/Heading';
import WideContainer from '@/components/ui/WideContainer';
import { allTags, findPostsFromTag } from '@/lib/posts';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    tag: string;
  };
};

export function generateStaticParams(): Props['params'][] {
  return allTags.map((tag) => ({ tag }));
}

export default function Page({ params }: Props) {
  const tag = decodeURIComponent(params.tag);
  const posts = findPostsFromTag(tag);

  if (!posts) {
    notFound();
  }

  return (
    <WideContainer>
      <H2 id='latest'>{`${tag} tag`}</H2>
      <PostList posts={posts} />
    </WideContainer>
  );
}
