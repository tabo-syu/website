import CardList from '@/components/model/post/CardList';
import Ranking from '@/components/model/spotify/Ranking';
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
        <H2 id='posts'>Recent Posts</H2>
        <CardList posts={posts} />
        <H2 id='spotify'>My Spotify</H2>
        <Ranking artists={artists} tracks={tracks} />
      </WideContainer>
    </>
  );
}
