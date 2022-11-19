import CardList from '@/components/model/post/CardList';
import { H2 } from '@/components/ui/Heading';
import WideContainer from '@/components/ui/WideContainer';
import { findPostsFromTag, tags } from '@/lib/posts';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    tag: string;
  };
};

export function generateStaticParams(): Props['params'][] {
  return tags.map((tag) => ({ tag }));
}

export default function Page({ params }: Props) {
  const posts = findPostsFromTag(params.tag);

  if (!posts) {
    notFound();
  }

  return (
    <WideContainer>
      <H2 id='latest'>{`${params.tag} 記事一覧`}</H2>
      <CardList posts={posts} />
    </WideContainer>
  );
}
