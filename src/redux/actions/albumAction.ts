import {
  FetchAlbumFailurePayload,
  FetchAlbumSuccessPayload
} from "../../models/album.model";
import {
  FETCH_ALBUM_FAILURE, FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS
} from "../types/albumTypes";

export const fetchAlbumRequest = () => ({
  type: FETCH_ALBUM_REQUEST,
});

export const fetchAlbumSuccess = (payload: FetchAlbumSuccessPayload) => ({
  type: FETCH_ALBUM_SUCCESS,
  payload,
});

export const fetchAlbumFailure = (payload: FetchAlbumFailurePayload) => ({
  type: FETCH_ALBUM_FAILURE,
  payload,
});
