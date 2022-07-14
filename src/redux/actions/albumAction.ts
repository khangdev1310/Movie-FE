import {
  FetchAlbumFailurePayload,
  FetchAlbumSuccessPayload,
  FetchAlbumRequest,
  FetchAlbumSuccess,
  FetchAlbumFailure,
} from "../../models/album.model";
import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
} from "../types/albumTypes";

export const fetchAlbumRequest = (): FetchAlbumRequest => ({
  type: FETCH_ALBUM_REQUEST,
});

export const fetchAlbumSuccess = (payload: FetchAlbumSuccessPayload): FetchAlbumSuccess => ({
  type: FETCH_ALBUM_SUCCESS,
  payload,
});

export const fetchAlbumFailure = (
  payload: FetchAlbumFailurePayload
): FetchAlbumFailure => ({
  type: FETCH_ALBUM_FAILURE,
  payload,
});
