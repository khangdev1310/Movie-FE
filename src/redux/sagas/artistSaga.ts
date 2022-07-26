import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  FetchArtistAlbumsRequest,
  FetchArtistRelatedRequest,
  FetchArtistRequest,
  FetchArtistToptracksRequest,
  RootArtist,
  RootArtistAlbums,
  RootArtistRelated,
  RootArtistToptracks,
} from "../../models/artist.model";
import axiosClient from "../../services/axios";
import {
  fetchArtistAlbumsFailure,
  fetchArtistAlbumsSuccess,
  fetchArtistFailure,
  fetchArtistRelatedFailure,
  fetchArtistRelatedSuccess,
  fetchArtistSuccess,
  fetchArtistToptracksFailure,
  fetchArtistToptracksSuccess,
} from "../actions/artistActions";
import {
  FETCH_ARTIST_ALBUMS_REQUEST,
  FETCH_ARTIST_RELATED_REQUEST,
  FETCH_ARTIST_REQUEST,
  FETCH_ARTIST_TOPTRACK_REQUEST,
} from "../types/artistTypes";

const getArtist = (id: string) => {
  return axiosClient.get("/artists/" + id);
};

const getArtistToptracks = (id: string) => {
  return axiosClient.get("/artists/" + id + "/top-tracks", {
    params: {
      country: "VN",
    },
  });
};

const getArtistAlbums = (id: string) => {
  return axiosClient.get("/artists/" + id + "/albums");
};

const getArtistRelated = (id: string) => {
  return axiosClient.get("/artists/" + id + "/related-artists");
};

function* fetchArtistSaga(id: FetchArtistRequest) {
  try {
    const response: AxiosResponse<RootArtist> = yield call(getArtist, id.id);

    yield put(
      fetchArtistSuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    yield put(fetchArtistFailure(error.message));
  }
}

// Toptracks
function* fetchArtistToptracksSaga(id: FetchArtistToptracksRequest) {
  try {
    const response: AxiosResponse<RootArtistToptracks> = yield call(
      getArtistToptracks,
      id.id
    );

    yield put(
      fetchArtistToptracksSuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    yield put(fetchArtistToptracksFailure(error.message));
  }
}

// Albums
function* fetchArtistAlbumsSaga(id: FetchArtistAlbumsRequest) {
  try {
    const response: AxiosResponse<RootArtistAlbums> = yield call(
      getArtistAlbums,
      id.id
    );

    yield put(
      fetchArtistAlbumsSuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    yield put(fetchArtistAlbumsFailure(error.message));
  }
}

// Related
function* fetchArtistRelatedSaga(id: FetchArtistRelatedRequest) {
  try {
    const response: AxiosResponse<RootArtistRelated> = yield call(
      getArtistRelated,
      id.id
    );

    yield put(
      fetchArtistRelatedSuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    yield put(fetchArtistRelatedFailure(error.message));
  }
}

function* watchAll() {
  yield all([
    takeLatest(FETCH_ARTIST_REQUEST, fetchArtistSaga),
    takeLatest(FETCH_ARTIST_TOPTRACK_REQUEST, fetchArtistToptracksSaga),
    takeLatest(FETCH_ARTIST_ALBUMS_REQUEST, fetchArtistAlbumsSaga),
    takeLatest(FETCH_ARTIST_RELATED_REQUEST, fetchArtistRelatedSaga),
  ]);
}

export default watchAll;
