import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { RootRecommendation } from "../../models/recommend.model";
import axiosClient from "../../services/axios";
import {
  fetchRecommendFailure,
  fetchRecommendSuccess,
} from "../actions/recommendActions";
import { FETCH_RECOMMENDATION_REQUEST } from "../types/recommendTypes";

const getRecommendations = () => {
  return axiosClient.get("/recommendations", {
    params: {
      seed_artists:
        "5dfZ5uSmzR7VQK0udbAVpf,1LEtM3AleYg1xabW6CRkpi,06HL4z0CvFAxyc27GXpf02,1uNFoZAHBGtllmzznpCI3s,5FWPIKz9czXWaiNtw45KQs",
    },
  });
};

function* fetchRecommendSaga() {
  try {
    const response: AxiosResponse<RootRecommendation> = yield call(
      getRecommendations
    );

    yield put(
      fetchRecommendSuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    yield put(fetchRecommendFailure(error.message));
  }
}

function* recommendSaga() {
  yield all([takeLatest(FETCH_RECOMMENDATION_REQUEST, fetchRecommendSaga)]);
}

export default recommendSaga;
