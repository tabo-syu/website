import { Artist } from '@/lib/spotify';
import Image from 'next/image';

type Props = {
  artists: Artist[];
};
const Artists: React.FC<Props> = ({ artists }) => {
  return (
    <>
      {artists.map((artist) => (
        <div key={artist.name}>
          <div>{artist.name}</div>
          <div>
            {artist.images.map((image) => (
              <div key={image.url}>
                <Image
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={artist.name}
                />
              </div>
            ))}
          </div>
          <div>{artist.url}</div>
        </div>
      ))}
    </>
  );
};

export default Artists;
