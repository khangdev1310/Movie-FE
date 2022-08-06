import { all, fork } from "redux-saga/effects";
import albumSaga from "./albumSaga";
import watchAll from "./artistSaga";
import audioSaga from "./audioSaga";
import categorySaga, { categoryPlaylistsSaga } from "./categorySaga";
import detailedAlbumSaga from "./detailedAlbumSaga";
import searchSaga from "./searchSaga";

export function* rootSaga() {
  yield all([
    fork(albumSaga),
    fork(detailedAlbumSaga),
    fork(audioSaga),
    fork(categorySaga),
    fork(categoryPlaylistsSaga),
    fork(searchSaga),
    fork(watchAll),
  ]);
}
