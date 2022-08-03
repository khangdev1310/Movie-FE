import { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './auth';
import Audio from './components/Audio';

import NavBar from './components/NavBar';
import Album from './pages/Album';
import Home from './pages/Home';

const App: FC = () => {
  const [token, setToken] = useState<string | null>('');

  useEffect(() => {
    const hash = window.location.hash;
    const accessToken = localStorage.getItem('token');
    if (!accessToken && hash) {
      let _token = hash.split('&')[0].split('=')[1];
      window.location.hash = '';
      window.localStorage.setItem('token', _token);
      setToken(_token);
    } else {
      setToken(accessToken);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <div className="App">
      <div className="min-h-full">
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="album/:id" element={<Album />} />
        </Routes>
      </div>

      <Audio />
    </div>
  );
};

export default App;
