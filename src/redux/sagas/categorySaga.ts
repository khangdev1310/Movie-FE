import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Root } from "../../models/category.model";
import axiosClient from "../../services/axios";
import {
  fetchCategoryFailure,
  fetchCategorySuccess,
} from "../actions/categoryAction";
import { FETCH_CATEGORY_REQUEST } from "../types/categoryType";

const getCategories = () => {
  return axiosClient.get("/browse/categories", {
    params: {
      country: "VN",
    },
  });
};

function* fetchCategorySaga() {
  try {
    const response: AxiosResponse<Root> = yield call(getCategories);

    yield put(
      fetchCategorySuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    yield put(fetchCategoryFailure(error.message));
  }
}

function* categorySaga() {
  yield all([takeLatest(FETCH_CATEGORY_REQUEST, fetchCategorySaga)]);
}

export default categorySaga;
