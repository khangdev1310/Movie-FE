import {
  DetailedAlbumActions,
  DetailedAlbumState,
} from "../../models/detailed-album.model";
import {
  FETCH_DETAILED_ALBUM_REQUEST,
  FETCH_DETAILED_ALBUM_SUCCESS,
  FETCH_DETAILED_ALBUM_FAILURE,
} from "../types/albumTypes";

const initialState: DetailedAlbumState = {
  details: {
    id: "",
    album_type: "",
    artists: [],
    images: [],
    label: "",
    name: "",
    release_date: "",
    tracks: {
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

export const detailedAlbumReducer = (
  state = initialState,
  action: DetailedAlbumActions
): DetailedAlbumState => {
  switch (action.type) {
    case FETCH_DETAILED_ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DETAILED_ALBUM_SUCCESS:
      return {
        ...state,
        details: action.payload.data,
      };
    case FETCH_DETAILED_ALBUM_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};
