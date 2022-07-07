import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import axiosClient from "../../service/axios";
import { todoAPI } from "../../service/todoAPI";
import { fetchTodoFailure, fetchTodoSuccess } from "../actitons/actionTodo";
import { FETCH_TODO_REQUEST } from "../constants/todoTypes";
import { ITodo } from "./../../features/TodoTypes";

const getTodos = () => {
  return axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");
};

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga() {
  try {
    const response: AxiosResponse<ITodo[]> = yield call(getTodos);
    console.log(response);

    yield put(
      fetchTodoSuccess({
        todos: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      })
    );
  }
}
/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
