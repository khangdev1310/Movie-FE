import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const AuthRequired: FC<Props> = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState<string | null>('');
  const navigate = useNavigate();

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

    if (accessToken === null || accessToken === '') {
      navigate('/login');
    }
  }, []);

  return <>{children}</>;
};

export default AuthRequired;
