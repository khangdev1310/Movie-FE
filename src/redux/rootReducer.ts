import { AppDispatch, RootState } from "./store";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { albumReducer } from "./reducers/albumReducer";
import { artistReducer } from "./reducers/artistReducer";
import { audioReducer } from "./reducers/audioReducer";
import { categoryPlaylistsReducer } from "./reducers/category-playlistsReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import { detailedAlbumReducer } from "./reducers/detailedAlbumReducer";
import { recommendReducer } from "./reducers/recommendReducer";
import { searchReducer } from "./reducers/searchReducer";


const rootReducer = combineReducers({
  albums: albumReducer,
  detailedAlbum: detailedAlbumReducer,
  audio: audioReducer,
  category: categoryReducer,
  categoryPlaylists: categoryPlaylistsReducer,
  search: searchReducer,
  artist: artistReducer,
  recommend: recommendReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default rootReducer;
