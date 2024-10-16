import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface AuthContextType {
  isAuth: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context.isAuth;
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(!!localStorage.getItem('authToken'));

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

  return <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
