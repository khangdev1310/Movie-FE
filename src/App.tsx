import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth";
import Audio from "./components/Audio";

import NavBar from "./components/NavBar";
import useAudio from "./components/useAudio";
import Album from "./pages/Album";
import Home from "./pages/Home";

const App: FC = () => {
  const [token, setToken] = useState<string | null>("");
  const { playerId, setPlayerId, setIsPlayerIdChanged } = useAudio();

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

  useEffect(() => {
    localStorage.setItem("minizing-playing", playerId);
  }, [playerId]);

  return !token ? (
    <Login />
  ) : (
    <div className="App">
      <div className="min-h-full">
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="album/:id"
            element={
              <Album
                setPlayerId={setPlayerId}
                setIsPlayerIdChanged={setIsPlayerIdChanged}
              />
            }
          />
        </Routes>
      </div>
      {playerId && <Audio playerId={playerId} />}
    </div>
  );
};

export default App;
