import axios from "axios";
import { ITodo } from "../features/TodoTypes";
import axiosClient from "./axios";

export const todoAPI = {
	  getTodos: () => {
		return axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");
	  }
}