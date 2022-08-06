import {
  FetchArtistAlbumsFailurePayload,
  FetchArtistAlbumsSuccessPayload,
  FetchArtistFailurePayload,
  FetchArtistRelatedFailurePayload,
  FetchArtistRelatedSuccessPayload,
  FetchArtistSuccessPayload,
  FetchArtistToptracksFailurePayload,
  FetchArtistToptracksSuccessPayload,
} from "../../models/artist.model";
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
} from "../types/artistTypes";

// Artist
export const fetchArtistRequest = (id: string) => ({
  type: FETCH_ARTIST_REQUEST,
  id,
});

export const fetchArtistSuccess = (payload: FetchArtistSuccessPayload) => ({
  type: FETCH_ARTIST_SUCCESS,
  payload,
});

export const fetchArtistFailure = (payload: FetchArtistFailurePayload) => ({
  type: FETCH_ARTIST_FAILURE,
  payload,
});

// Artist's Toptracks
export const fetchArtistToptracksRequest = (id: string) => ({
  type: FETCH_ARTIST_TOPTRACK_REQUEST,
  id,
});

export const fetchArtistToptracksSuccess = (
  payload: FetchArtistToptracksSuccessPayload
) => ({
  type: FETCH_ARTIST_TOPTRACK_SUCCESS,
  payload,
});

export const fetchArtistToptracksFailure = (
  payload: FetchArtistToptracksFailurePayload
) => ({
  type: FETCH_ARTIST_TOPTRACK_FAILURE,
  payload,
});
// Artist's Albums
export const fetchArtistAlbumsRequest = (id: string) => ({
  type: FETCH_ARTIST_ALBUMS_REQUEST,
  id,
});

export const fetchArtistAlbumsSuccess = (
  payload: FetchArtistAlbumsSuccessPayload
) => ({
  type: FETCH_ARTIST_ALBUMS_SUCCESS,
  payload,
});

export const fetchArtistAlbumsFailure = (
  payload: FetchArtistAlbumsFailurePayload
) => ({
  type: FETCH_ARTIST_ALBUMS_FAILURE,
  payload,
});
// Artist's Related artists
export const fetchArtistRelatedRequest = (id: string) => ({
  type: FETCH_ARTIST_RELATED_REQUEST,
  id,
});

export const fetchArtistRelatedSuccess = (
  payload: FetchArtistRelatedSuccessPayload
) => ({
  type: FETCH_ARTIST_RELATED_SUCCESS,
  payload,
});

export const fetchArtistRelatedFailure = (
  payload: FetchArtistRelatedFailurePayload
) => ({
  type: FETCH_ARTIST_RELATED_FAILURE,
  payload,
});
