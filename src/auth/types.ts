import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
} from "../redux/constants/authTypes";

export interface IAuth {
  token: string;
}

export interface AuthState {
  pending: boolean;
  token: string;
  error: string | null;
}

export interface LoginPayload {
  callback: any;
}

export interface LoginSuccessPayload {
  token: string;
}

export interface LoginFailurePayload {
  error: string;
}

export type LoginRequest = {
  type: typeof LOGIN_REQUEST;
  payload: LoginPayload;
};

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
};

export type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: LoginFailurePayload;
};

export type AuthActions = LoginRequest | LoginSuccess | LoginFailure;
