import { FC, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DataGrid from '../../components/DataGrid';
import { fetchSearchRequest } from '../../redux/actions/searchAction';
import { useAppSelector } from '../../redux/rootReducer';

type SearchProps = {
  setPlayerId: Function;
  setIsPlayerIdChanged: Function;
};

const Search: FC<SearchProps> = ({ setPlayerId, setIsPlayerIdChanged }) => {
  const { data } = useAppSelector((state) => state.search);

  const dispatch = useDispatch();
  const location = useLocation();

  const { q } = useMemo(
    () => Object.fromEntries(new URLSearchParams(location.search)),
    [location.search]
  );

  useEffect(() => {
    dispatch(fetchSearchRequest(q));
  }, []);

  return (
    <div className="mx-[5vw] mb-5">
      <h1 className="text-3xl mt-5">Search result for: {q}</h1>

      <h1 className="mt-5 mb-2 text-2xl">Tracks</h1>

      <DataGrid
        type="button"
        handler={(id: string) => {
          setPlayerId(id);
          setIsPlayerIdChanged(true);
        }}
        data={
          data.tracks?.items
            ?.filter((track: any) => track.name)
            .map((track: any) => ({
              id: track.id,
              image: (track as any)?.album?.images?.[0]?.url,
              title: track.name,
              description: track?.artists
                .map((artist: any) => artist.name)
                .join(', '),
            })) as any
        }
      />

      <h1 className="mt-5 mb-3 text-2xl">Albums</h1>

      <DataGrid
        type="link"
        handler={(id: string) => `/album/${id}`}
        data={
          data.albums?.items
            .filter((album: any) => album.name)
            .map((album: any) => ({
              id: album.id,
              image: album?.images?.[0]?.url,
              title: album.name,
              description: (album as any)?.artists
                ?.map((artist: any) => artist?.name)
                ?.join(', '),
            })) as any
        }
      />
    </div>
  );
};

export default Search;
