import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DataGrid from '../../components/DataGrid';
import {
  fetchArtistAlbumsRequest,
  fetchArtistRelatedRequest,
  fetchArtistRequest,
  fetchArtistToptracksRequest,
} from '../../redux/actions/artistActions';
import { AppState } from '../../redux/rootReducer';
import { formatNumber } from '../../ultils';

type ArtistProps = {
  // setPlayerId: (id: string) => void;
  setPlayerId: Function;
};

const Artist: FC<ArtistProps> = ({ setPlayerId }) => {
  const { id } = useParams();

  const { artist, artistAlbums, artistRelated, artistToptracks } = useSelector(
    (state: AppState) => state.artist
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchArtistRequest(id));
      dispatch(fetchArtistToptracksRequest(id));
      dispatch(fetchArtistAlbumsRequest(id));
      dispatch(fetchArtistRelatedRequest(id));
    }
  }, [id]);

  return (
    <div className="mx-[5vw] mb-5">
      <div className="flex flex-col md:flex-row items-center mt-8 gap-10">
        <img
          className="w-[250px] h-[250px] rounded-full"
          src={artist?.images?.[0]?.url}
          alt=""
        />
        <div className="flex flex-col justify-center md:items-start gap-3">
          <h1 className="text-4xl md:text-5xl text-center md:text-left font-semibold">
            {artist?.name}
          </h1>
          <p className="text-xl text-center md:text-left">
            {formatNumber(artist.followers.total)} followers
          </p>
          <p className="text-xl text-center md:text-left">
            Popularity: {artist.popularity} / 100
          </p>
        </div>
      </div>

      <h1 className="mt-5 mb-3 text-2xl">Top Tracks</h1>

      <DataGrid
        type="button"
        handler={(id: string) => {
          setPlayerId(id);
        }}
        data={artistToptracks.tracks
          .filter((track) => track.name)
          .map((track) => ({
            id: track.id,
            image: (track as any)?.album?.images?.[0]?.url,
            title: track.name,
            description: track?.artists.map((artist) => artist.name).join(', '),
          }))}
      />

      <h1 className="mt-5 mb-3 text-2xl">Albums</h1>

      <DataGrid
        type="link"
        handler={(id: string) => `/album/${id}`}
        data={artistAlbums?.items
          .filter((album) => album.name)
          .map((album) => ({
            id: album.id,
            image: album.images?.[0]?.url,
            title: album.name,
            description: (album as any)?.artists
              ?.map((artist: any) => artist?.name)
              ?.join(', '),
          }))}
      />

      <h1 className="mt-5 mb-2 text-2xl">Related Artists</h1>

      <DataGrid
        type="link"
        handler={(id: string) => `/artist/${id}`}
        data={
          artistRelated.artists
            .filter((artist) => artist.name)
            .map((artist) => ({
              id: artist.id,
              image: artist.images?.[0]?.url,
              title: artist.name,
              description: `${formatNumber(artist.followers.total)} followers`,
            })) as any
        }
      />
    </div>
  );
};

export default Artist;
