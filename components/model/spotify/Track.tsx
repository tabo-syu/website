import Media from '@/components/ui/Media';
import { Track as TrackType } from '@/lib/spotify';

type Props = {
  track: TrackType;
};
const Track: React.FC<Props> = ({ track }) => {
  return (
    <a key={track.url} href={track.url} target='_blank' rel='noreferrer'>
      <Media
        title={track.name}
        subtitle={track.artists.join(', ')}
        image={{
          src: track.images.default.url,
          width: track.images.default.width,
          height: track.images.default.height,
          alt: track.name,
        }}
      />
    </a>
  );
};

export default Track;
