import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  FetchDetailedAlbumRequest,
  IDetailedAlbum,
} from "../../models/detailed-album.model";
import axiosClient from "../../services/axios";
import {
  fetchDetailedAlbumFailure,
  fetchDetailedAlbumSuccess,
} from "../actions/detailedAlbumAction";
import { FETCH_DETAILED_ALBUM_REQUEST } from "../types/albumTypes";

const getDetailedAlbums = (id: string) => {
  return axiosClient.get("/albums/" + id);
};

function* fetchAlbumSaga(id: FetchDetailedAlbumRequest) {
  try {
    const response: AxiosResponse<IDetailedAlbum> = yield call(
      getDetailedAlbums,
      id.id
    );

    yield put(
      fetchDetailedAlbumSuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    yield put(fetchDetailedAlbumFailure(error.message));
  }
}

function* detailedAlbumSaga() {
  yield all([takeLatest(FETCH_DETAILED_ALBUM_REQUEST, fetchAlbumSaga)]);
}

export default detailedAlbumSaga;
