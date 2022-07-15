import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailedAlbumRequest } from "../../redux/actions/detailedAlbumAction";
import { AppState, useAppSelector } from "../../redux/rootReducer";
import { formatDuration } from "../../ultils";

const Album: FC = () => {
  const { details, error, loading } = useAppSelector(
    (state: AppState) => state.detailedAlbum
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    id && dispatch(fetchDetailedAlbumRequest(id));
  }, []);

  return (
    <div className="mx-[5vw] my-10 flex flex-col md:flex-row items-start gap-10">
      <div className="flex-shrink-0 md:sticky top-10 flex flex-col items-center w-full md:w-auto">
        <img
          className="w-[350px] h-[350px] object-cover"
          src={details?.images[0]?.url}
          alt=""
        />
        <h1 className="text-center text-2xl font-semibold my-3">test</h1>

        <div className="flex flex-wrap justify-center text-gray-400">IZTY</div>
      </div>

      <div className="flex-grow w-full md:w-auto">
        {details.tracks.items.map((item: any, index: number) => {
          return (
            <button
              className="w-full flex justify-between items-center p-2 text-left bg-dark hover:bg-dark-hovered group transition duration-300"
              key={item.id}
            >
              <div className="flex items-center gap-5">
                <div className="text-xl text-gray-400  w-5 text-right">
                  {index + 1}
                </div>
                <div className="transition duration-300">
                  <h1 className="font-medium group-hover:text-purple-hover">
                    {item.name}
                  </h1>
                  <p className="text-slate-400 ">
                    {item.artists.map((item: any) => item.name).join(", ")}
                  </p>
                </div>
              </div>
              <div>{formatDuration(item.duration_ms)}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Album;
