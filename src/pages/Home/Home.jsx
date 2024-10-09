import React from 'react';
import Header from '../../components/Header/Header';
import Game from '../../components/Game/Game';
import Layout from '../../components/Layout/Layout';
import UserIcon from '../../components/UserIcon/UserIcon';
import Main from '../../components/Main/Main';

const Home = () => {
  return (
    <Layout>
      <>
        <Header user={<UserIcon />} />
        <Main>
          <Game />
        </Main>
      </>
    </Layout>
  );
};

export default Home;
