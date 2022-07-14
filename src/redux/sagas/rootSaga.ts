import { all, fork } from "redux-saga/effects";
import albumSaga from "./albumSaga";

export function* rootSaga() {
  yield all([fork(albumSaga)]);
}
