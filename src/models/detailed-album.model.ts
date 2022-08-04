import {
  FETCH_DETAILED_ALBUM_REQUEST,
  FETCH_DETAILED_ALBUM_SUCCESS,
  FETCH_DETAILED_ALBUM_FAILURE,
} from "../redux/types/albumTypes";

export interface IDetailedAlbum {
  id: string;
  album_type: string;
  artists: Artist[];
  images: Image[];
  label: string;
  name: string;
  release_date: string;
  tracks: Tracks;
}

export interface Artist {
  external_urls: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Tracks {
  href: string;
  items: Item[];
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;
}

export interface Item {
  artists: Artist2[];
  disc_number: number;
  duration_ms: number;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Artist2 {
  external_urls: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface DetailedAlbumState {
  details: IDetailedAlbum;
  loading: boolean;
  error: string | null;
}

export interface FetchDetailedAlbumSuccessPayload {
  data: IDetailedAlbum;
}

export interface FetchDetailedAlbumFailurePayload {
  error: string;
}

export interface FetchDetailedAlbumRequest {
  type: typeof FETCH_DETAILED_ALBUM_REQUEST;
  id: string
}

export type FetchDetailedAlbumSuccess = {
  type: typeof FETCH_DETAILED_ALBUM_SUCCESS;
  payload: FetchDetailedAlbumSuccessPayload;
};

export type FetchDetailedAlbumFailure = {
  type: typeof FETCH_DETAILED_ALBUM_FAILURE;
  payload: FetchDetailedAlbumFailurePayload;
};

export type DetailedAlbumActions =
  | FetchDetailedAlbumRequest
  | FetchDetailedAlbumSuccess
  | FetchDetailedAlbumFailure;
