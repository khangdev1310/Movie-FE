import {
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
} from "../redux/types/categoryType";

export interface Root {
  categories: ICategories;
}

export interface ICategories {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

// export interface ICategories {
//   categories: {
//     href: string;
//     items: Item[];
//     limit: number;
//     next: string;
//     offset: number;
//     previous: any;
//     total: number;
//   };
// }

export interface Item {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
}

export interface Icon {
  height?: number;
  url: string;
  width?: number;
}

export interface CategoryState {
  data: Root;
  loading: boolean;
  error: string | null;
}

export interface FetchCategorySuccessPayload {
  data: Root;
}

export interface FetchCategoryFailurePayload {
  error: string;
}

export interface FetchCategoryRequest {
  type: typeof FETCH_CATEGORY_REQUEST;
}

export type FetchCategorySuccess = {
  type: typeof FETCH_CATEGORY_SUCCESS;
  payload: FetchCategorySuccessPayload;
};

export type FetchCategoryFailure = {
  type: typeof FETCH_CATEGORY_FAILURE;
  payload: FetchCategoryFailurePayload;
};

export type CategoryActions =
  | FetchCategoryRequest
  | FetchCategorySuccess
  | FetchCategoryFailure;
