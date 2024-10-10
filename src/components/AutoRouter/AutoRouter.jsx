import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const AutoRouter = ({ routes, defaultRedirect, notFoundElement }) => {
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

AutoRouter.propTypes = {
  routes: PropTypes.array.isRequired,
  defaultRedirect: PropTypes.string.isRequired,
  notFoundElement: PropTypes.element.isRequired,
};

export default AutoRouter;
