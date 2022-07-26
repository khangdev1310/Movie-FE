import { FC, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./auth";
import Audio from "./components/Audio";

import NavBar from "./components/NavBar";
import useAudio from "./components/useAudio";
import Album from "./pages/Album";
import Artist from "./pages/Artist";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Search from "./pages/Search";

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

  // Scroll to Top
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return !token ? (
    <Login />
  ) : (
    <div className="App bg-gradient-to-b  from-gray-300 to-pink-500 dark:from-purple-900 dark:to-purple-700">
      <div className="min-h-full text-black font-bold dark:text-white ">
        <NavBar />
        <Routes>
          <Route
            index
            element={
              <Home
                setPlayerId={setPlayerId}
                setIsPlayerIdChanged={setIsPlayerIdChanged}
              />
            }
          />
          <Route
            path="album/:id"
            element={
              <Album
                setPlayerId={setPlayerId}
                setIsPlayerIdChanged={setIsPlayerIdChanged}
              />
            }
          />
          <Route path="category/:id" element={<Category />} />
          <Route
            path="search"
            element={
              <Search
                setPlayerId={setPlayerId}
                setIsPlayerIdChanged={setIsPlayerIdChanged}
              />
            }
          />
          <Route
            path="artist/:id"
            element={<Artist setPlayerId={setPlayerId} />}
          />
        </Routes>
      </div>
      {playerId && <Audio playerId={playerId} />}
    </div>
  );
};

export default App;
