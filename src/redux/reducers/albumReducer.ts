import { IAlbum, IAlbumItem } from "./../../models/album.model";
import { AlbumActions, AlbumState } from "../../models/album.model";
import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
} from "../types/albumTypes";

const initialState: AlbumState = {
  albums: {
    href: "",
    items: [],
    limit: 0,
    next: "",
    offset: 0,
    previous: null,
    total: 0,
  },
  loading: false,
  error: null,
};

export const albumReducer = (state = initialState, action: AlbumActions) => {
  switch (action.type) {
    case FETCH_ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ALBUM_SUCCESS:

    console.log(action.payload.data);
    
      return {
        ...state,
        albums: action.payload.data,
        loading: false,
      };
    case FETCH_ALBUM_FAILURE:
      return {
        ...state,
        albums: [],
        loading: false,
      };
    default:
      return state;
  }
};
