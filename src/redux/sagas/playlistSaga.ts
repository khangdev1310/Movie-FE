import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  FetchPlaylistRequest,
  RootPlaylists,
} from "../../models/playlist.model";
import axiosClient from "../../services/axios";
import {
  fetchPlaylistFailure,
  fetchPlaylistSuccess,
} from "../actions/playlistAction";
import { FETCH_PLAYLIST_REQUEST } from "../types/playlistTypes";

const getPlaylist = (id: string) => {
  return axiosClient.get("/playlists/" + id);
};

function* fetchPlaylistSaga(id: FetchPlaylistRequest) {
  try {
    const response: AxiosResponse<RootPlaylists> = yield call(
      getPlaylist,
      id.id
    );

    yield put(
      fetchPlaylistSuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    yield put(fetchPlaylistFailure(error.message));
  }
}

function* playlistSaga() {
  yield all([takeLatest(FETCH_PLAYLIST_REQUEST, fetchPlaylistSaga)]);
}

export default playlistSaga;
