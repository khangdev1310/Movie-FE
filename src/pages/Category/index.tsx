import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DataGrid from '../../components/DataGrid';
import { fetchCategoryPlaylistsRequest } from '../../redux/actions/categoryAction';
import { useAppSelector } from '../../redux/rootReducer';

const Category: any = () => {
  const { data } = useAppSelector((state) => state.categoryPlaylists);
  const value = useAppSelector((state) => state.category);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    id && dispatch(fetchCategoryPlaylistsRequest(id));
  }, []);

  return (
    <div className="mx-[5vw] mb-5 h-[100%]">
      <h1 className="mt-5 mb-3 text-2xl">
        Category:{' '}
        {value.data?.categories.items.find((item: any) => item.id === id)?.name}{' '}
      </h1>

      <DataGrid
        type="link"
        handler={(id: string) => `/playlist/${id}`}
        data={data.playlists.items
          .filter((playlist: any) => playlist.name)
          .map((playlist: any) => ({
            id: playlist.id,
            image: playlist.images?.[0]?.url,
            title: playlist.name,
            description: playlist?.owner?.display_name,
          }))}
      />
    </div>
  );
};

export default Category;
