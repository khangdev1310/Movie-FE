import {
  FETCH_ALBUM_FAILURE,
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
} from "../redux/types/albumTypes";

export interface Root {
  albums: IAlbum;
}

export interface Artist {
  external_urls: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface IAlbumItem {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: string;
  href: string;
  id: string;
  images: string;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface IAlbum {
  albums: {
    href: string;
    items: IAlbumItem[];
    limit: number;
    next: string;
    offset: number;
    previous: any;
    total: number;
  };
}

export interface AlbumState {
  albums: IAlbum;
  loading: boolean;
  error: string | null;
}

export interface FetchAlbumSuccessPayload {
  data: IAlbum;
}

export interface FetchAlbumFailurePayload {
  error: string;
}

export interface FetchAlbumRequest {
  type: typeof FETCH_ALBUM_REQUEST;
}

export type FetchAlbumSuccess = {
  type: typeof FETCH_ALBUM_SUCCESS;
  payload: FetchAlbumSuccessPayload;
};

export type FetchAlbumFailure = {
  type: typeof FETCH_ALBUM_FAILURE;
  payload: FetchAlbumFailurePayload;
};

export type AlbumActions =
  | FetchAlbumRequest
  | FetchAlbumSuccess
  | FetchAlbumFailure;
