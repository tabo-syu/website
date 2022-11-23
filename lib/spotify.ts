import 'server-only';

const revalidateTime = 3000;

type AccessTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
};
const fetchAccessToken = async () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID as string;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET as string;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN as string;

  const endpoint = 'https://accounts.spotify.com/api/token';
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
    next: { revalidate: revalidateTime },
  });

  return response.json() as Promise<AccessTokenResponse>;
};

const domain = 'https://api.spotify.com';

type Image = {
  url: string;
  width: number;
  height: number;
};
type Images = {
  min: Image;
  default: Image;
  max: Image;
};

type Track = {
  name: string;
  artists: string[];
  images: Images;
  url: string;
};
const fetchTopTracks = async () => {
  const { access_token } = await fetchAccessToken();
  const endpoint = `${domain}/v1/me/top/tracks?limit=5`;
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: { revalidate: revalidateTime },
  });

  const { items } = await response.json();
  const tracks = items.map((track: any) => ({
    name: track.name,
    artists: track.artists.map((artist: any) => artist.name),
    images: {
      max: track.album.images[0],
      default: track.album.images[1],
      min: track.album.images[2],
    },
    url: track.external_urls.spotify,
  }));

  return tracks as Track[];
};

type Artist = {
  name: string;
  images: Images;
  url: string;
  genres: string[];
};
const fetchTopArtists = async () => {
  const { access_token } = await fetchAccessToken();
  const endpoint = `${domain}/v1/me/top/artists?limit=5`;
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: { revalidate: revalidateTime },
  });

  const { items } = await response.json();
  const artists = items.map((artist: any) => ({
    name: artist.name,
    images: {
      max: artist.images[0],
      default: artist.images[1],
      min: artist.images[2],
    },
    url: artist.external_urls.spotify,
    genres: artist.genres,
  }));

  return artists as Artist[];
};

export { fetchTopTracks, fetchTopArtists, type Track, type Artist };
