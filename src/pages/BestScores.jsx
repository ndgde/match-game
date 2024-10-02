import React from 'react';
import Header from '../components/Header/Header';
import List from '../components/List/List';
import Player from '../components/Player/Player';
import Layout from '../components/Layout/Layout';

const BestScores = () => {
  const players = [
    { id: 1, name: 'Игрок 1', score: 100 },
    { id: 2, name: 'Игрок 2', score: 90 },
  ];

  return (
    <Layout
      header={<Header user="some user" />}
      content={
        <>
          <h1>Лучшие игроки</h1>
          <List>
            {players.map((player) => (
              <Player key={player.id} name={player.name} score={player.score} />
            ))}
          </List>
        </>
      }
    />
  );
};

export default BestScores;
