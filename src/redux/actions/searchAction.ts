import {
  FetchSearchFailurePayload,
  FetchSearchSuccessPayload,
} from "../../models/search.model";
import {
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
} from "../types/searchTypes";

export const fetchSearchRequest = (name: string) => ({
  type: FETCH_SEARCH_REQUEST,
  name,
});

export const fetchSearchSuccess = (payload: FetchSearchSuccessPayload) => ({
  type: FETCH_SEARCH_SUCCESS,
  payload,
});

export const fetchSearchFailure = (payload: FetchSearchFailurePayload) => ({
  type: FETCH_SEARCH_FAILURE,
  payload,
});
