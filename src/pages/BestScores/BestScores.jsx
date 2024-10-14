import React from 'react';
import styles from './BestScores.module.scss';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Player from '../../components/Player/Player';
import Layout from '../../components/Layout/Layout';
import Main from '../../components/Main/Main';
import UserIcon from '../../components/UserIcon/UserIcon';

const BestScores = () => {
  const players = [
    { id: 1, name: 'Игрок 1', score: 2000, email: 'some-email1@mail.com' },
    { id: 2, name: 'Игрок 2', score: 1500, email: 'some-email2@mail.com' },
  ].sort((a, b) => b.score - a.score);

  const getBestScore = () => {
    const savedData = localStorage.getItem('bestScore');
    if (savedData) {
      return JSON.parse(savedData).bestScore;
    } else {
      return 0;
    }
  };

  return (
    <Layout>
      <>
        <Header user={<UserIcon />} />
        <Main className={styles.main}>
          <>
            <div className={styles.your_container}>
              <h2 className={styles.your_title}>Your best score</h2>
              <p className={styles.your_score}>{getBestScore()}</p>
            </div>
            <h1 className={styles.title}>Best players</h1>
            <List
              items={players}
              renderItem={(player) => (
                <Player
                  name={player.name}
                  score={player.score}
                  email={player.email}
                  avatar={`${process.env.PUBLIC_URL}/unauthenticated-user.png`}
                />
              )}
              itemClassName={styles.item}
            />
          </>
        </Main>
      </>
    </Layout>
  );
};

export default BestScores;
