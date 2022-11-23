import Media from '@/components/ui/Media';
import { Artist as ArtistType } from '@/lib/spotify';

type Props = {
  artist: ArtistType;
};
const Artist: React.FC<Props> = ({ artist }) => {
  const upperCaseGenres = artist.genres.map(
    (genre) => `${genre.charAt(0).toUpperCase()}${genre.substring(1)}`
  );

  return (
    <a href={artist.url} target='_blank' rel='noreferrer'>
      <Media
        title={artist.name}
        subtitle={upperCaseGenres.join(', ')}
        image={{
          src: artist.images.default.url,
          width: artist.images.default.width,
          height: artist.images.default.height,
          alt: artist.name,
        }}
      />
    </a>
  );
};

export default Artist;
