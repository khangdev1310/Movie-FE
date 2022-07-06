import {
  LoginRequest,
  LoginSuccess,
  LoginSuccessPayload,
  LoginFailure,
  LoginFailurePayload,
  LoginPayload,
} from "./../../auth/types";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constants/authTypes";

export const loginRequest = (payload: LoginPayload): LoginRequest => {
  console.log(payload);
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};

export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};
