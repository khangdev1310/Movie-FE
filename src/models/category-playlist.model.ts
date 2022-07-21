import {
  FETCH_CATEGORY_PLAYLIST_FAILURE,
  FETCH_CATEGORY_PLAYLIST_REQUEST,
  FETCH_CATEGORY_PLAYLIST_SUCCESS,
} from "../redux/types/categoryType";

export interface Root {
  playlists: CategoryPlaylists;
}

export interface CategoryPlaylists {
  href: string;
  items: Item[];
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;
}

export interface Item {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: any;
  public: any;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  height: any;
  url: string;
  width: any;
}

export interface Owner {
  display_name: string;
  external_urls: ExternalUrls2;
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface ExternalUrls2 {
  spotify: string;
}

export interface Tracks {
  href: string;
  total: number;
}

export interface CategoryPlaylistsState {
  data: Root;
  loading: boolean;
  error: string | null;
}

export interface FetchCategoryPlaylistsSuccessPayload {
  data: Root;
}

export interface FetchCategoryPlaylistsFailurePayload {
  error: string;
}

export interface FetchCategoryPlaylistsRequest {
  type: typeof FETCH_CATEGORY_PLAYLIST_REQUEST;
  id: string
}

export type FetchCategoryPlaylistsSuccess = {
  type: typeof FETCH_CATEGORY_PLAYLIST_SUCCESS;
  payload: FetchCategoryPlaylistsSuccessPayload;
};

export type FetchCategoryPlaylistsFailure = {
  type: typeof FETCH_CATEGORY_PLAYLIST_FAILURE;
  payload: FetchCategoryPlaylistsFailurePayload;
};

export type CategoryPlaylistsActions =
  | FetchCategoryPlaylistsRequest
  | FetchCategoryPlaylistsSuccess
  | FetchCategoryPlaylistsFailure;
