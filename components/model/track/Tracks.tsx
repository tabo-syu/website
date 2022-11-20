import { Track } from '@/lib/spotify';
import Image from 'next/image';

type Props = {
  tracks: Track[];
};
const Tracks: React.FC<Props> = ({ tracks }) => {
  return (
    <>
      {tracks.map((track) => (
        <div key={track.name}>
          <div>{track.name}</div>
          <div>{track.url}</div>
          <div>{track.artists}</div>
          <div>
            {track.images.map((image) => (
              <div key={image.url}>
                <Image
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={track.name}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Tracks;
