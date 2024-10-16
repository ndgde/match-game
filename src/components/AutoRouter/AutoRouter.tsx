import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  authRequired?: boolean;
}

interface AutoRouterProps {
  routes: RouteConfig[];
  defaultRedirect: string;
  notFoundElement?: React.ReactNode;
}

const AutoRouter: React.FC<AutoRouterProps> = ({ routes, defaultRedirect, notFoundElement }) => {
  const isAuth = useAuth();

  return (
    <Routes>
      {routes.map(({ path, element, authRequired }, index) => (
        <Route
          key={index}
          path={path}
          element={authRequired && !isAuth ? <Navigate to={defaultRedirect} /> : element}
        />
      ))}

      <Route path="*" element={notFoundElement || <Navigate to={defaultRedirect} />} />
    </Routes>
  );
};

export default AutoRouter;
