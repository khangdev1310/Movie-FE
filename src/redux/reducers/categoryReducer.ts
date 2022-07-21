import { CategoryActions, CategoryState } from "../../models/category.model";
import {
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
} from "../types/categoryType";

const initialState: CategoryState = {
  data: {
    categories: {
      href: "",
      items: [],
      limit: 0,
      next: "",
      offset: 0,
      previous: null,
      total: 0,
    },
  },
  loading: false,
  error: null,
};

export const categoryReducer = (
  state = initialState,
  action: CategoryActions
): CategoryState => {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};
