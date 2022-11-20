import TagHead from '@/components/ui/Head';
import { findPostsFromTag } from '@/lib/posts';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    tag: string;
  };
};
export default function Head({ params }: Props) {
  const posts = findPostsFromTag(params.tag);

  if (!posts) {
    notFound();
  }

  return (
    <TagHead
      title={`${params.tag}タグ 記事一覧`}
      description={`今までに${params.tag}タグとして投稿した記事の一覧ページです。`}
      image='/og.png'
      type='blog'
    />
  );
}
