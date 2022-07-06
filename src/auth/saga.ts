import { IAuth, LoginPayload } from './types';
import { LOGIN_REQUEST } from './../redux/constants/authTypes';
import { all, call, put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginRequest, loginSuccess } from "../redux/actitons/authAction";

const login = async (payload: LoginPayload) => {

}