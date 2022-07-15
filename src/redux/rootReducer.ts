import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { albumReducer } from "./reducers/albumReducer";
import { detailedAlbumReducer } from "./reducers/detailedAlbumReducer";
import { AppDispatch, RootState } from "./store";

const rootReducer = combineReducers({
  album: albumReducer,
  detailedAlbum: detailedAlbumReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default rootReducer;
