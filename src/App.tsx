import { useEffect } from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { Route, Routes, useLocation } from 'react-router-dom';
import Audio from './components/Audio';
import ErrorBoundaryFallback from './components/ErrorBoundaryFallback';

import { ToastContainer } from 'react-toastify';
import AuthRequired from './components/Login/AuthRequired';
import NavBar from './components/NavBar';
import useAudio from './components/useAudio';
import Album from './pages/Album';
import Artist from './pages/Artist';
import Category from './pages/Category';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Search from './pages/Search';

const App = () => {
  const { playerId, setPlayerId, setIsPlayerIdChanged } = useAudio();

  useEffect(() => {
    localStorage.setItem('minizing-playing', playerId);
  }, [playerId]);

  // Scroll to Top
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AuthRequired>
      <div className="App bg-gradient-to-b  from-gray-300 to-pink-500 dark:from-purple-900 dark:to-purple-700">
        <div className="min-h-[100vh] text-black font-bold dark:text-white ">
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

            <Route
              path="playlist/:id"
              element={<Playlist setPlayerId={setPlayerId} />}
            />
          </Routes>
        </div>
        {!!playerId && <Audio playerId={playerId} />}
      </div>
      <ToastContainer limit={1} containerId="toast-container" />
    </AuthRequired>
  );
};

export const AppErrorBoundary = withErrorBoundary(App, {
  FallbackComponent: ErrorBoundaryFallback,
});

export default App;
