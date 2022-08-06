import {
  CategoryPlaylistsActions,
  CategoryPlaylistsState,
} from '../../models/category-playlist.model';
import {
  FETCH_CATEGORY_PLAYLIST_FAILURE,
  FETCH_CATEGORY_PLAYLIST_REQUEST,
  FETCH_CATEGORY_PLAYLIST_SUCCESS,
} from '../types/categoryType';

const initialState: CategoryPlaylistsState = {
  data: {
    playlists: {
      href: '',
      items: [],
      limit: 0,
      next: null,
      offset: 0,
      previous: null,
      total: 0,
    },
  },
  loading: false,
  error: null,
};

export const categoryPlaylistsReducer = (
  state = initialState,
  action: CategoryPlaylistsActions
): CategoryPlaylistsState => {
  switch (action.type) {
    case FETCH_CATEGORY_PLAYLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CATEGORY_PLAYLIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case FETCH_CATEGORY_PLAYLIST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};
