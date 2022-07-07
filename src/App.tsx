import { FC, useEffect, useState } from "react";
import "./App.css";
import Login from "./auth/Login";
import Navbar from "./components/Navbar";
import Todo from "./features/Todo";

const App: FC = () => {
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const hash: string = window.location.hash;
    const accessToken: string | null = localStorage.getItem("token");
    if (!accessToken && hash) {
      let _token: string = hash.split("&")[0].split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", _token);
      setToken(_token);
    } else {
      setToken(accessToken);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <div className="App">
      <Todo />
      <p className="text-yellow-500 text-[27px] font-bold">Hello world</p>
    </div>
  );
};

export default App;
