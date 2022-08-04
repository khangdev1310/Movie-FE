import {
  FetchDetailedAlbumFailure,
  FetchDetailedAlbumFailurePayload,
  FetchDetailedAlbumRequest,
  FetchDetailedAlbumSuccess,
  FetchDetailedAlbumSuccessPayload,
} from "../../models/detailed-album.model";
import {
  FETCH_DETAILED_ALBUM_FAILURE,
  FETCH_DETAILED_ALBUM_REQUEST,
  FETCH_DETAILED_ALBUM_SUCCESS,
} from "../types/albumTypes";

export const fetchDetailedAlbumRequest = (id: string): FetchDetailedAlbumRequest => ({
  type: FETCH_DETAILED_ALBUM_REQUEST,
  id
});

export const fetchDetailedAlbumSuccess = (
  payload: FetchDetailedAlbumSuccessPayload
): FetchDetailedAlbumSuccess => ({
  type: FETCH_DETAILED_ALBUM_SUCCESS,
  payload,
});

export const fetchDetailedAlbumFailure = (
  payload: FetchDetailedAlbumFailurePayload
): FetchDetailedAlbumFailure => ({
  type: FETCH_DETAILED_ALBUM_FAILURE,
  payload,
});
