import {
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
} from "../redux/types/searchTypes";

export interface Root {
  albums: Albums;
  tracks: Tracks;
  playlists: Playlists;
  artists: Artist;
}

export interface Albums {
  href: string;
  items: ItemAlbums[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface Tracks {
  href: string;
  items: ItemTracks[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface Playlists {
  href: string;
  items: ItemPlaylists[];
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;
}

export interface ItemAlbums {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls2;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface ExternalUrls2 {
  spotify: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface ItemTracks {
  album: Album;
  artists: ArtistTracks[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls6;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Album {
  album_type: string;
  artists: Artist2[];
  available_markets: string[];
  external_urls: ExternalUrls4;
  href: string;
  id: string;
  images: Image2[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist2 {
  external_urls: ExternalUrls3;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls3 {
  spotify: string;
}

export interface ExternalUrls4 {
  spotify: string;
}

export interface Image2 {
  height: number;
  url: string;
  width: number;
}

export interface ArtistTracks {
  external_urls: ExternalUrls5;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls5 {
  spotify: string;
}

export interface ExternalIds {
  isrc: string;
}

export interface ExternalUrls6 {
  spotify: string;
}

export interface ItemPlaylists {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls7;
  href: string;
  id: string;
  images: ImagePlaylists[];
  name: string;
  owner: Owner;
  primary_color: any;
  public: any;
  snapshot_id: string;
  tracks: Tracks2;
  type: string;
  uri: string;
}

export interface ExternalUrls7 {
  spotify: string;
}

export interface ImagePlaylists {
  height?: number;
  url: string;
  width?: number;
}

export interface Owner {
  display_name: string;
  external_urls: ExternalUrls8;
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface ExternalUrls8 {
  spotify: string;
}

export interface Tracks2 {
  href: string;
  total: number;
}

export interface SearchState {
  data: Partial<Root>;
  loading: boolean;
  error: string | null;
}

export interface FetchSearchSuccessPayload {
  data: Partial<Root>;
}

export interface FetchSearchFailurePayload {
  error: string;
}

export interface FetchSearchRequest {
  type: typeof FETCH_SEARCH_REQUEST;
  name: string;
}

export type FetchSearchSuccess = {
  type: typeof FETCH_SEARCH_SUCCESS;
  payload: FetchSearchSuccessPayload;
};
export type FetchSearchFailure = {
  type: typeof FETCH_SEARCH_FAILURE;
  payload: FetchSearchFailurePayload;
};

export type SearchActions =
  | FetchSearchRequest
  | FetchSearchSuccess
  | FetchSearchFailure;
