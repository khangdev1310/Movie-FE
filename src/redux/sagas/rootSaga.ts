import { all, fork } from "redux-saga/effects";
import albumSaga from "./albumSaga";
import audioSaga from "./audioSaga";
import categorySaga from "./categorySaga";
import detailedAlbumSaga from "./detailedAlbumSaga";

export function* rootSaga() {
  yield all([
    fork(albumSaga),
    fork(detailedAlbumSaga),
    fork(audioSaga),
    fork(categorySaga),
  ]);
}
