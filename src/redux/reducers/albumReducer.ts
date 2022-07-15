import { AlbumActions, AlbumState } from "../../models/album.model";
import {
  FETCH_ALBUM_FAILURE,
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
} from "../types/albumTypes";

const initialState: AlbumState = {
  albums: {
    albums: {
      href: "",
      items: [],
      limit: 0,
      next: "",
      offset: 0,
      previous: null,
      total: 0,
    },
  },
  loading: false,
  error: null,
};

export const albumReducer = (
  state = initialState,
  action: AlbumActions
): AlbumState => {
  switch (action.type) {
    case FETCH_ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        albums: action.payload.data,
        loading: false,
        error: null,
      };
    case FETCH_ALBUM_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};
