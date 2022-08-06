import {
  FETCH_ARTIST_ALBUMS_FAILURE,
  FETCH_ARTIST_ALBUMS_REQUEST,
  FETCH_ARTIST_ALBUMS_SUCCESS,
  FETCH_ARTIST_FAILURE,
  FETCH_ARTIST_RELATED_FAILURE,
  FETCH_ARTIST_RELATED_REQUEST,
  FETCH_ARTIST_RELATED_SUCCESS,
  FETCH_ARTIST_REQUEST,
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_TOPTRACK_FAILURE,
  FETCH_ARTIST_TOPTRACK_REQUEST,
  FETCH_ARTIST_TOPTRACK_SUCCESS,
} from "../redux/types/artistTypes";

export interface RootArtist {
  external_urls: ExternalUrls;
  followers: ArtistFollowers;
  genres: any[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface ArtistFollowers {
  href: any;
  total: number;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface FetchArtistSuccessPayload {
  data: RootArtist;
}

export interface FetchArtistFailurePayload {
  error: string;
}

export interface FetchArtistRequest {
  type: typeof FETCH_ARTIST_REQUEST;
  id: string;
}

export type FetchArtistSuccess = {
  type: typeof FETCH_ARTIST_SUCCESS;
  payload: FetchArtistSuccessPayload;
};

export type FetchArtistFailure = {
  type: typeof FETCH_ARTIST_FAILURE;
  payload: FetchArtistFailurePayload;
};

// Interface Artist's Toptracks
export interface RootArtistToptracks {
  tracks: Track[];
}

export interface Track {
  album: Album;
  artists: Artist2[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: string;
  external_urls: string;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url?: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Album {
  album_type: string;
  artists: Artist[];
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
  external_urls: string;
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

export interface Artist2 {
  external_urls: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls3 {
  spotify: string;
}

export interface ExternalIds {
  isrc: string;
}

export interface ExternalUrls4 {
  spotify: string;
}

export interface FetchArtistToptracksSuccessPayload {
  data: RootArtistToptracks;
}

export interface FetchArtistToptracksFailurePayload {
  error: string;
}

export interface FetchArtistToptracksRequest {
  type: typeof FETCH_ARTIST_TOPTRACK_REQUEST;
  id: string;
}

export type FetchArtistToptracksSuccess = {
  type: typeof FETCH_ARTIST_TOPTRACK_SUCCESS;
  payload: FetchArtistToptracksSuccessPayload;
};

export type FetchArtistToptracksFailure = {
  type: typeof FETCH_ARTIST_TOPTRACK_FAILURE;
  payload: FetchArtistToptracksFailurePayload;
};

// Interface Artist's Albums
export interface RootArtistAlbums {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface Item {
  album_group: string;
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
  external_urls: string;
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

export interface FetchArtistAlbumsSuccessPayload {
  data: RootArtistAlbums;
}

export interface FetchArtistAlbumsFailurePayload {
  error: string;
}

export interface FetchArtistAlbumsRequest {
  type: typeof FETCH_ARTIST_ALBUMS_REQUEST;
  id: string;
}

export type FetchArtistAlbumsSuccess = {
  type: typeof FETCH_ARTIST_ALBUMS_SUCCESS;
  payload: FetchArtistAlbumsSuccessPayload;
};

export type FetchArtistAlbumsFailure = {
  type: typeof FETCH_ARTIST_ALBUMS_FAILURE;
  payload: FetchArtistAlbumsFailurePayload;
};

// Interface Artist's Related Artists
export interface RootArtistRelated {
  artists: ArtistRelated[];
}

export interface ArtistRelated {
  external_urls: string;
  followers: ArtistRelatedFollowers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface ArtistRelatedFollowers {
  href: any;
  total: number;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface FetchArtistRelatedSuccessPayload {
  data: RootArtistRelated;
}

export interface FetchArtistRelatedFailurePayload {
  error: string;
}

export interface FetchArtistRelatedRequest {
  type: typeof FETCH_ARTIST_RELATED_REQUEST;
  id: string;
}

export type FetchArtistRelatedSuccess = {
  type: typeof FETCH_ARTIST_RELATED_SUCCESS;
  payload: FetchArtistRelatedSuccessPayload;
};

export type FetchArtistRelatedFailure = {
  type: typeof FETCH_ARTIST_RELATED_FAILURE;
  payload: FetchArtistAlbumsFailurePayload;
};

export interface ArtistState {
  artist: RootArtist;
  artistToptracks: RootArtistToptracks;
  artistAlbums: RootArtistAlbums;
  artistRelated: RootArtistRelated;
  loading: boolean;
  error: string | null;
}

export type ArtistActions =
  | FetchArtistRequest
  | FetchArtistSuccess
  | FetchArtistFailure
  | FetchArtistToptracksRequest
  | FetchArtistToptracksSuccess
  | FetchArtistToptracksFailure
  | FetchArtistAlbumsRequest
  | FetchArtistAlbumsSuccess
  | FetchArtistAlbumsFailure
  | FetchArtistRelatedRequest
  | FetchArtistRelatedSuccess
  | FetchArtistRelatedFailure;
