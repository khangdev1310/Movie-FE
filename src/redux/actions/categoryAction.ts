import {
  FetchCategoryPlaylistsFailurePayload,
  FetchCategoryPlaylistsSuccessPayload,
} from "../../models/category-playlist.model";
import {
  FetchCategoryFailurePayload,
  FetchCategorySuccessPayload,
} from "../../models/category.model";
import {
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_PLAYLIST_FAILURE,
  FETCH_CATEGORY_PLAYLIST_REQUEST,
  FETCH_CATEGORY_PLAYLIST_SUCCESS,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
} from "../types/categoryType";

export const fetchCategoryRequest = () => ({
  type: FETCH_CATEGORY_REQUEST,
});

export const fetchCategorySuccess = (payload: FetchCategorySuccessPayload) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload,
});

export const fetchCategoryFailure = (payload: FetchCategoryFailurePayload) => ({
  type: FETCH_CATEGORY_FAILURE,
  payload,
});

export const fetchCategoryPlaylistsRequest = (id: string) => ({
  type: FETCH_CATEGORY_PLAYLIST_REQUEST,
  id,
});

export const fetchCategoryPlaylistsSuccess = (
  payload: FetchCategoryPlaylistsSuccessPayload
) => ({
  type: FETCH_CATEGORY_PLAYLIST_SUCCESS,
  payload,
});

export const fetchCategoryPlaylistsFailure = (
  payload: FetchCategoryPlaylistsFailurePayload
) => ({
  type: FETCH_CATEGORY_PLAYLIST_FAILURE,
  payload,
});
