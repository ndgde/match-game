import React, { FC, ReactElement } from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BestScores from './pages/BestScores/BestScores';
import GameSettings from './pages/GameSettings/GameSettings';
import AutoRouter from './components/AutoRouter/AutoRouter';
import AuthProvider from './components/AutoRouter/AuthProvider';

interface RouteConfig {
  path: string;
  element: ReactElement;
  authRequired: boolean;
}

const routesConfig: RouteConfig[] = [
  { path: '/', element: <Home />, authRequired: true },
  { path: '/about', element: <About />, authRequired: false },
  { path: '/best-scores', element: <BestScores />, authRequired: true },
  { path: '/game-settings', element: <GameSettings />, authRequired: true },
];

const App: FC = () => {
  return (
    <AuthProvider>
      <AutoRouter routes={routesConfig} defaultRedirect="/about" notFoundElement={<p>404. not found</p>} />;
    </AuthProvider>
  );
};

export default App;
