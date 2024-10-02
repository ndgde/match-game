import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BestScores from './pages/BestScores';
import GameSettings from './pages/GameSettings';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/best-scores" element={<BestScores />}></Route>
        <Route path="/game-settings" element={<GameSettings />}></Route>
      </Routes>
    </>
  );
};

export default App;
