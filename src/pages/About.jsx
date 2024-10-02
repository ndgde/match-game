import React from 'react';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import UserIcon from '../components/UserIcon/UserIcon';

const About = () => {
  return (
    <Layout
      header={<Header user={<UserIcon />} />}
      content={
        <>
          <h1>Как играть</h1>
          <p>Здесь будет объяснение, как играть в игру и пройти регистрацию.</p>
        </>
      }
    />
  );
};

export default About;
