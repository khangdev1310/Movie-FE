import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataGrid from "../../components/DataGrid";
import { fetchAlbumRequest } from "../../redux/actions/albumAction";
import { AppState, useAppSelector } from "../../redux/rootReducer";
import DataTest from "../../ultils/index";
import { albumReducer } from "../../redux/reducers/albumReducer";
import { AlbumState, IAlbum, IAlbumItem } from "../../models/album.model";
import { RootState } from "../../redux/store";
import Loader from "../../components/Loader";

const Home: FC = () => {
  const { data, error, loading } = useAppSelector(
    (state: AppState) => state.albums
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbumRequest());
  }, []);

  // if (!albums) return <Loader />;

  return (
    <div className="mx-[5vw] pb-6">
      <h1 className="mt-4 mb-3 text-2xl">Recommended</h1>
      <DataGrid
        data={DataTest.getData()}
        type="button"
        handler={() => {
          console.log("Test click");
        }}
      />

      <h1 className="mt-4 mb-3 text-2xl">New Releases</h1>
      <DataGrid
        data={data?.albums?.items
          ?.filter((track: any) => track.name)
          ?.map((item: any) => ({
            id: item.id,
            title: item.name,
            image: item.images[0].url,
            description: item.artists[0].name,
          }))}
        type="link"
        handler={(id: string) => `/album/${id}}`}
      />

      <h1 className="mt-4 mb-3 text-2xl">Categories</h1>
      <DataGrid
        data={DataTest.getCategories()}
        type="link"
        handler={(id: string) => `/categories/${id}}`}
      />
    </div>
  );
};

export default Home;
