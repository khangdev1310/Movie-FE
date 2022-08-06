import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  FetchSearchRequest,
  Root as RootSearch,
} from "../../models/search.model";
import axiosClient from "../../services/axios";
import {
  fetchSearchFailure,
  fetchSearchSuccess,
} from "../actions/searchAction";
import { FETCH_SEARCH_REQUEST } from "../types/searchTypes";

const getDataFromSearch = (query: string) => {
  return axiosClient.get("/search", {
    params: {
      q: query,
      type: "track,artist,album,playlist",
    },
  });
};

function* fetchSearchSaga(query: FetchSearchRequest) {
  try {
    const response: AxiosResponse<RootSearch> = yield call(
      getDataFromSearch,
      query.name
    );

    yield put(
      fetchSearchSuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    yield put(fetchSearchFailure(error.message));
  }
}

function* searchSaga() {
  yield all([takeLatest(FETCH_SEARCH_REQUEST, fetchSearchSaga)]);
}

export default searchSaga;
