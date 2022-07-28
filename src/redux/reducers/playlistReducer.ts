import { PlaylistActions, PlaylistState } from "../../models/playlist.model";
import {
  FETCH_PLAYLIST_FAILURE,
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
} from "../types/playlistTypes";

const initialState: PlaylistState = {
  data: {
    collaborative: false,
    description: "",
    external_urls: "",
    followers: {
      href: "",
      total: 0,
    },
    href: "",
    id: "",
    images: [],
    name: "",
    owner: {
      display_name: "",
      external_urls: "",
      href: "",
      id: "",
      type: "",
      uri: "",
    },
    primary_color: "",
    public: false,
    snapshot_id: "",
    tracks: {
      href: "",
      items: [],
      limit: 0,
      next: "",
      offset: 0,
      previous: "",
      total: 0,
    },
    type: "",
    uri: "",
  },
  loading: false,
  error: null,
};

export const playlistReducer = (
  state = initialState,
  action: PlaylistActions
): PlaylistState => {
  switch (action.type) {
    case FETCH_PLAYLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_PLAYLIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    case FETCH_PLAYLIST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};
