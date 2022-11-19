import CardList from '@/components/model/post/CardList';
import { H2 } from '@/components/ui/Heading';
import MainVisual from '@/components/ui/MainVisual';
import WideContainer from '@/components/ui/WideContainer';
import { latestPosts } from '@/lib/posts';

export default function Page() {
  const posts = latestPosts.slice(0, 3);

  return (
    <>
      <MainVisual />
      <WideContainer>
        <H2 id='latest'>最新記事</H2>
        <CardList posts={posts} />
      </WideContainer>
    </>
  );
}
