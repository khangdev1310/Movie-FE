import { AxiosResponse } from "axios";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { fetchAlbumSuccess, fetchAlbumFailure } from "../actions/albumAction";
import axiosClient from "../../services/axios";
import { FETCH_ALBUM_REQUEST } from "../types/albumTypes";
import { IAlbum } from "./../../models/album.model";

const getAlbums = () => {
  return axiosClient.get("/browse/new-releases", {
    params: {
      country: "VN",
    },
  });
};

function* fetchAlbumSaga() {
  try {
    const response: AxiosResponse<IAlbum> = yield call(getAlbums);

    yield put(
      fetchAlbumSuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    yield put(fetchAlbumFailure(error.message));
  }
}

function* albumSaga() {
  yield all([takeLatest(FETCH_ALBUM_REQUEST, fetchAlbumSaga)]);
}

export default albumSaga;
