import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../redux/constants/authTypes";
import { AuthActions, AuthState } from "./types";

const initialState: AuthState = {
  pending: false,
  token: "",
  error: null,
};

const reducers = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducers;
