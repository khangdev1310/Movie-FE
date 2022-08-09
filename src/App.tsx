import { useEffect } from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { Route, Routes, useLocation } from 'react-router-dom';
import Audio from './components/Audio';
import ErrorBoundaryFallback from './components/ErrorBoundary/ErrorBoundaryFallback';

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
import Login from './components/Login/auth';
import ErrorBoundaryTest from './components/ErrorBoundaryTest';

const App = () => {
  const { playerId, setPlayerId, setIsPlayerIdChanged } = useAudio();

  // useEffect(() => {
  //   localStorage.setItem('minizing-playing', playerId);
  // }, [playerId]);

  // Scroll to Top
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    // <AuthRequired>
    //   <div className="App bg-gradient-to-b  from-gray-300 to-pink-500 dark:from-purple-900 dark:to-purple-700">
    //     <div className="min-h-[100vh] text-black font-bold dark:text-white ">
    //       {location.pathname === '/login' ? null : <NavBar />}

    //       <Routes>
    //         <Route
    //           index
    //           element={
    //             <Home
    //               setPlayerId={setPlayerId}
    //               setIsPlayerIdChanged={setIsPlayerIdChanged}
    //             />
    //           }
    //         />
    //         <Route path="login" element={<Login />} />

    //         <Route
    //           path="album/:id"
    //           element={
    //             <Album
    //               setPlayerId={setPlayerId}
    //               setIsPlayerIdChanged={setIsPlayerIdChanged}
    //             />
    //           }
    //         />
    //         <Route path="category/:id" element={<Category />} />
    //         <Route
    //           path="search"
    //           element={
    //             <Search
    //               setPlayerId={setPlayerId}
    //               setIsPlayerIdChanged={setIsPlayerIdChanged}
    //             />
    //           }
    //         />
    //         <Route
    //           path="artist/:id"
    //           element={<Artist setPlayerId={setPlayerId} />}
    //         />

    //         <Route
    //           path="playlist/:id"
    //           element={<Playlist setPlayerId={setPlayerId} />}
    //         />
    //       </Routes>
    //     </div>
    //     {location.pathname != '/login' && !!playerId && (
    //       <Audio playerId={playerId} />
    //     )}
    //   </div>
    //   {location.pathname != '/login' && (
    //     <ToastContainer limit={1} containerId="toast-container" />
    //   )}
    // </AuthRequired>

    <div>
      <ErrorBoundaryTest />
    </div>
  );
};

export const AppErrorBoundary = withErrorBoundary(App, {
  FallbackComponent: ErrorBoundaryFallback,
});

export default App;
