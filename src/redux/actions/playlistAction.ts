import {
  FetchPlaylistFailurePayload,
  FetchPlaylistSuccessPayload,
} from "../../models/playlist.model";
import {
  FETCH_PLAYLIST_FAILURE,
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
} from "../types/playlistTypes";

export const fetchPlaylistRequest = (id: string) => ({
  type: FETCH_PLAYLIST_REQUEST,
  id,
});

export const fetchPlaylistSuccess = (payload: FetchPlaylistSuccessPayload) => ({
  type: FETCH_PLAYLIST_SUCCESS,
  payload,
});

export const fetchPlaylistFailure = (payload: FetchPlaylistFailurePayload) => ({
  type: FETCH_PLAYLIST_FAILURE,
  payload,
});
