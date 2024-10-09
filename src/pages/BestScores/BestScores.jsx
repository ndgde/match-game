import React from 'react';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Player from '../../components/Player/Player';
import Layout from '../../components/Layout/Layout';
import Main from '../../components/Main/Main';
import UserIcon from '../../components/UserIcon/UserIcon';

const BestScores = () => {
  const players = [
    { id: 1, name: 'Игрок 1', score: 100 },
    { id: 2, name: 'Игрок 2', score: 90 },
  ];

  return (
    <Layout>
      <>
        <Header user={<UserIcon />} />
        <Main>
          <>
            <h1>Лучшие игроки</h1>
            <List
              items={players}
              renderItem={(player) => <Player name={player.name} score={player.score} rank={2} avatar={'0'} />}
            />
          </>
        </Main>
      </>
    </Layout>
  );
};

export default BestScores;
