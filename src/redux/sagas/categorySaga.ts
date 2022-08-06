import { FetchCategoryPlaylistsRequest } from "./../../models/category-playlist.model";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Root as RootCategoryPlaylists } from "../../models/category-playlist.model";
import { Root as RootCategory } from "../../models/category.model";
import axiosClient from "../../services/axios";
import {
  fetchCategoryFailure,
  fetchCategoryPlaylistsFailure,
  fetchCategoryPlaylistsSuccess,
  fetchCategorySuccess,
} from "../actions/categoryAction";
import {
  FETCH_CATEGORY_PLAYLIST_REQUEST,
  FETCH_CATEGORY_REQUEST,
} from "../types/categoryType";

const getCategories = () => {
  return axiosClient.get("/browse/categories", {
    params: {
      country: "VN",
    },
  });
};

function* fetchCategorySaga() {
  try {
    const response: AxiosResponse<RootCategory> = yield call(getCategories);

    yield put(
      fetchCategorySuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    yield put(fetchCategoryFailure(error.message));
  }
}

const getCategoriesPlaylists = (id: string) => {
  return axiosClient.get(`/browse/categories/${id}/playlists`);
};

function* fetchCategoryPlaylistsSaga(id: FetchCategoryPlaylistsRequest) {
  try {
    const response: AxiosResponse<RootCategoryPlaylists> = yield call(
      getCategoriesPlaylists,
      id.id
    );

    yield put(
      fetchCategoryPlaylistsSuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    yield put(fetchCategoryPlaylistsFailure(error.message));
  }
}

function* categorySaga() {
  yield all([takeLatest(FETCH_CATEGORY_REQUEST, fetchCategorySaga)]);
}

export function* categoryPlaylistsSaga() {
  yield all([
    takeLatest(FETCH_CATEGORY_PLAYLIST_REQUEST, fetchCategoryPlaylistsSaga),
  ]);
}

export default categorySaga;
