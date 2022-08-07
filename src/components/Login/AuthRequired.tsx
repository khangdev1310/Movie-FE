import React, { FC, useEffect, useState } from 'react';
import Login from './auth';

type Props = {
  children: React.ReactNode;
};

const AuthRequired: FC<Props> = ({ children }) => {
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

  return token === null ? <Login /> : <>{children}</>;
};

export default AuthRequired;
