import React from 'react';
import Header from '../components/Header/Header';
import Game from '../components/Game/Game';
import Layout from '../components/Layout/Layout';
import UserIcon from '../components/UserIcon/UserIcon';

const Home = () => {
  return <Layout header={<Header user={<UserIcon />} />} content={<Game />} />;
};

export default Home;
