import PostsHead from '@/components/ui/Head';

export default function Head() {
  return (
    <PostsHead
      title='All posts'
      description='今までに投稿した記事の一覧ページです。'
      image='/ogp.jpg'
      type='blog'
    />
  );
}
