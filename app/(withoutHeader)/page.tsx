import MyApps from '@/components/model/github/AppList';
import RecentPosts from '@/components/model/post/PostList';
import MySpotifyTrends from '@/components/model/spotify/Ranking';
import { H2 } from '@/components/ui/Heading';
import MainVisual from '@/components/ui/MainVisual';
import ViewMore from '@/components/ui/ViewMore';
import WideContainer from '@/components/ui/WideContainer';
import { fetchPinnedRepositories } from '@/lib/github';
import { latestPosts } from '@/lib/posts';
import { fetchTopArtists, fetchTopTracks } from '@/lib/spotify';

export default async function Page() {
  const posts = latestPosts.slice(0, 3);
  const repos = await fetchPinnedRepositories();
  const [artists, tracks] = await Promise.all([
    fetchTopArtists(),
    fetchTopTracks(),
  ]);

  return (
    <>
      <MainVisual />
      <WideContainer>
        <H2 id='posts'>Recent Posts</H2>
        <RecentPosts posts={posts} />
        <ViewMore href='/posts' text='See all posts' />
        <H2 id='apps'>My Apps</H2>
        <MyApps repos={repos} />
        <H2 id='spotify'>My Spotify Trends</H2>
        <MySpotifyTrends artists={artists} tracks={tracks} />
      </WideContainer>
    </>
  );
}
