import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchTodoRequest } from "../redux/actitons/actionTodo";
import { AppState } from "../redux/rootReducer";
import axiosClient from "../service/axios";
import { ITodo } from "./TodoTypes";

function Todo(): JSX.Element {
  const { todos, pending, error } = useSelector(
    (state: AppState) => state.todo
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  return <div>Todo</div>;
}

export default Todo;
