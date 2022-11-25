import PostList from '@/components/model/post/PostList';
import { H2 } from '@/components/ui/Heading';
import WideContainer from '@/components/ui/WideContainer';
import { latestPosts } from '@/lib/posts';

export default function Page() {
  return (
    <WideContainer>
      <H2 id='latest'>最新記事</H2>
      <PostList posts={latestPosts} />
    </WideContainer>
  );
}
