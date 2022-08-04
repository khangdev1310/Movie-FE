import { all, fork } from "redux-saga/effects";
import albumSaga from "./albumSaga";
import detailedAlbumSaga from "./detailedAlbumSaga";

export function* rootSaga() {
  yield all([fork(albumSaga), fork(detailedAlbumSaga)]);
}
