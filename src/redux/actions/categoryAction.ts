import {
  FetchCategoryFailurePayload,
  FetchCategorySuccessPayload,
} from "../../models/category.model";
import {
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
} from "../types/categoryType";

export const fetchCategoryRequest = () => ({
  type: FETCH_CATEGORY_REQUEST,
});

export const fetchCategorySuccess = (payload: FetchCategorySuccessPayload) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload,
});

export const fetchCategoryFailure = (payload: FetchCategoryFailurePayload) => ({
  type: FETCH_CATEGORY_FAILURE,
  payload,
});
