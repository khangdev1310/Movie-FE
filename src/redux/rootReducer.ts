import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { albumReducer } from "./reducers/albumReducer";
import { audioReducer } from "./reducers/audioReducer";
import { categoryPlaylistsReducer } from "./reducers/category-playlistsReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import { detailedAlbumReducer } from "./reducers/detailedAlbumReducer";
import { AppDispatch, RootState } from "./store";

const rootReducer = combineReducers({
  album: albumReducer,
  detailedAlbum: detailedAlbumReducer,
  audio: audioReducer,
  category: categoryReducer,
  categoryPlaylists: categoryPlaylistsReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default rootReducer;
