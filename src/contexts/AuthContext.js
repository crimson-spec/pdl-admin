import React, { useState, createContext, useContext, useEffect } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSigned, setIsSigned] = useState(false);
  const [loadingStorage, setLoadingStorage] = useState(true);
  const [session, setSession] = useState({
    token: '',
    name: '',
  });

  useEffect(() => {
    const sessionStorage = localStorage.getItem('@session');
    if (sessionStorage) {
      const { token } = JSON.parse(sessionStorage);
      api.defaults.headers.authorization = `Bearer ${token}`;
      setIsSigned(true);
    }

    setLoadingStorage(false);
  }, []);

  const signin = async ({ username, password }) => {
    try {
      const { data } = await api.post('/sessions/admin', {
        username,
        password,
      });

      const newSession = {
        token: data.token,
        name: data.user.name,
      };

      api.defaults.headers.authorization = `Bearer ${data.token}`;

      setIsSigned(true);
      setSession(newSession);
      localStorage.setItem('@session', JSON.stringify(newSession));
    } catch (error) {
      console.log(error);
    }
  };

  const signout = async () => {
    try {
      // const { data } = await api.post('/sessions/admin', {
      //   username,
      //   password,
      // });

      setIsSigned(false);
      setSession({
        token: '',
        name: '',
      });

      localStorage.removeItem('@session');
      api.defaults.headers.authorization = undefined;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ loadingStorage, isSigned, session, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
