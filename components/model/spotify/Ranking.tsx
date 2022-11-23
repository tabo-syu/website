import { H3 } from '@/components/ui/Heading';
import { Artist, Track } from '@/lib/spotify';
import ArtistMedia from './Artist';
import TrackMedia from './Track';

type Props = {
  artists: Artist[];
  tracks: Track[];
};
const Ranking: React.FC<Props> = ({ artists, tracks }) => {
  return (
    <div className='flex flex-wrap gap-10 md:flex-nowrap'>
      <div className='basis-full'>
        <H3>Top Artists</H3>
        {artists.map((artist) => (
          <article
            key={artist.url}
            className='border-b py-3 last:border-none first-of-type:pt-0 dark:border-gray-700'
          >
            <ArtistMedia artist={artist} />
          </article>
        ))}
      </div>
      <div className='basis-full'>
        <H3>Top Tracks</H3>
        {tracks.map((track) => (
          <article
            key={track.url}
            className='border-b py-3 last:border-none first-of-type:pt-0 dark:border-gray-700'
          >
            <TrackMedia track={track} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
