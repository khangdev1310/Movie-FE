import { TodoActions, TodoState } from "../../features/TodoTypes";
import {
  FETCH_TODO_FAILURE,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
} from "../constants/todoTypes";

const initialState: TodoState = {
  todos: [],
  pending: false,
  error: null,
};

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TODO_SUCCESS:
      console.log(action);

      return {
        ...state,
        pending: false,
        todos: action.payload.todos,
        error: null,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
