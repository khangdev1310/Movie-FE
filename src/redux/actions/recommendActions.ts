import {
  FetchRecommendFailurePayload,
  FetchRecommendSuccessPayload,
} from "../../models/recommend.model";
import {
  FETCH_RECOMMENDATION_FAILURE,
  FETCH_RECOMMENDATION_REQUEST,
  FETCH_RECOMMENDATION_SUCCESS,
} from "../types/recommendTypes";

export const fetchRecommendRequest = () => ({
  type: FETCH_RECOMMENDATION_REQUEST,
});

export const fetchRecommendSuccess = (
  payload: FetchRecommendSuccessPayload
) => ({
  type: FETCH_RECOMMENDATION_SUCCESS,
  payload,
});

export const fetchRecommendFailure = (
  payload: FetchRecommendFailurePayload
) => ({
  type: FETCH_RECOMMENDATION_FAILURE,
  payload,
});
