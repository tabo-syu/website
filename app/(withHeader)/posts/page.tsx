import CardList from '@/components/model/post/CardList';
import { H2 } from '@/components/ui/Heading';
import WideContainer from '@/components/ui/WideContainer';
import { latestPosts } from '@/lib/posts';

export default function Page() {
  return (
    <WideContainer>
      <H2 id='latest'>最新記事</H2>
      <CardList posts={latestPosts} />
    </WideContainer>
  );
}
