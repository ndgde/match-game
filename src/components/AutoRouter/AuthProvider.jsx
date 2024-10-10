import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('authToken'));

  useEffect(() => {
    const checkAuth = () => {
      setIsAuth(!!localStorage.getItem('authToken'));
    };

    window.addEventListener('storage', checkAuth);

    checkAuth();

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  return <AuthContext.Provider value={isAuth}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
