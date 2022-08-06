import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DataGrid from '../../components/DataGrid';
import { fetchAlbumRequest } from '../../redux/actions/albumAction';
import { fetchCategoryRequest } from '../../redux/actions/categoryAction';
import { fetchRecommendRequest } from '../../redux/actions/recommendActions';
import { AppState, useAppSelector } from '../../redux/rootReducer';

type HomeProps = {
  setPlayerId: Function;
  setIsPlayerIdChanged: Function;
};

const Home: FC<HomeProps> = ({ setPlayerId, setIsPlayerIdChanged }) => {
  const { data } = useAppSelector((state: AppState) => state.albums);

  const { dataCategory } = useAppSelector((state: AppState) => state.category);
  const { recommends } = useAppSelector((state: AppState) => state.recommend);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbumRequest());
    dispatch(fetchCategoryRequest());
    dispatch(fetchRecommendRequest());
  }, []);

  // if (!albums) return <Loader />;

  return (
    <div className="mx-[5vw] pb-6">
      <h1 className="mt-4 mb-3 text-2xl">Recommended</h1>
      <DataGrid
        data={recommends.tracks
          .filter((track) => track.name)
          .map((track) => ({
            id: track.id,
            image: (track as any)?.album?.images?.[0]?.url,
            title: track.name,
            description: track?.artists.map((artist) => artist.name).join(', '),
          }))}
        type="button"
        handler={(id: string) => {
          setPlayerId(id);
          setIsPlayerIdChanged(true);
        }}
      />

      <h1 className="mt-4 mb-3 text-2xl">New Releases</h1>
      <DataGrid
        data={data?.albums?.items
          ?.filter((track: any) => track.name)
          ?.map((item: any) => {
            return {
              id: item.id,
              title: item.name,
              image: item.images[0]?.url,
              description: item.artists
                ?.map((item: any) => item?.name)
                ?.join(', '),
            };
          })}
        type="link"
        handler={(id: string) => `album/` + id}
      />

      <h1 className="mt-4 mb-3 text-2xl">Categories</h1>
      <DataGrid
        data={dataCategory?.categories?.items.map((item: any) => {
          return {
            id: item.id,
            title: item.name,
            image: item.icons[0].url,
          };
        })}
        type="link"
        handler={(id: string) => `/category/` + id}
      />
    </div>
  );
};

export default Home;
