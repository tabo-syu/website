import Artists from '@/components/model/artist/Artists';
import CardList from '@/components/model/post/CardList';
import Tracks from '@/components/model/track/Tracks';
import { H2 } from '@/components/ui/Heading';
import MainVisual from '@/components/ui/MainVisual';
import WideContainer from '@/components/ui/WideContainer';
import { latestPosts } from '@/lib/posts';
import { fetchTopArtists, fetchTopTracks } from '@/lib/spotify';

export default async function Page() {
  const posts = latestPosts.slice(0, 3);
  const [artists, tracks] = await Promise.all([
    fetchTopArtists(),
    fetchTopTracks(),
  ]);

  return (
    <>
      <MainVisual />
      <WideContainer>
        <H2 id='latest'>最新記事</H2>
        <CardList posts={posts} />
        <H2 id='artists'>はまってるアーティスト</H2>
        <Artists artists={artists} />
        <H2 id='tracks'>はまってる曲</H2>
        <Tracks tracks={tracks} />
      </WideContainer>
    </>
  );
}
