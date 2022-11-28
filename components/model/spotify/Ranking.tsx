import ArtistMedia from '@/components/model/spotify/Artist';
import TrackMedia from '@/components/model/spotify/Track';
import { H3 } from '@/components/ui/Heading';
import { fetchTopArtists, fetchTopTracks } from '@/lib/spotify';
import { use } from 'react';

const Ranking: React.FC = () => {
  const [artists, tracks] = use(
    Promise.all([fetchTopArtists(), fetchTopTracks()])
  );

  return (
    <div className='grid-rows grid gap-10 md:grid-cols-2'>
      <section>
        <H3>Top Artists</H3>
        {artists.map((artist) => (
          <article
            key={artist.url}
            className='border-b py-3 last:border-none first-of-type:pt-0 dark:border-gray-700'
          >
            <ArtistMedia artist={artist} />
          </article>
        ))}
      </section>
      <section>
        <H3>Top Tracks</H3>
        {tracks.map((track) => (
          <article
            key={track.url}
            className='border-b py-3 last:border-none first-of-type:pt-0 dark:border-gray-700'
          >
            <TrackMedia track={track} />
          </article>
        ))}
      </section>
    </div>
  );
};

export default Ranking;
