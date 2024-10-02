/* eslint-disable prettier/prettier */
import React from 'react';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Card from './components/Card/Card';
import Grid from './components/Grid/Grid';

function App() {
  return (
    <>
      <Layout header={<Header user={<p>some user</p>} />} main={<p>main section</p>} />

      <Grid
        cards={[
          <Card key={1} id={1} isFlipped={true} img={process.env.PUBLIC_URL + '/card-imgs/img-0.png'} />,
          <Card key={2} id={2} isFlipped={false} img={process.env.PUBLIC_URL + '/card-imgs/img-0.png'} />,
          <Card key={3} id={3} isFlipped={true} img={process.env.PUBLIC_URL + '/card-imgs/img-0.png'} />,
          <Card key={4} id={4} isFlipped={false} img={process.env.PUBLIC_URL + '/card-imgs/img-0.png'} />,
          <Card key={5} id={5} isFlipped={true} img={process.env.PUBLIC_URL + '/card-imgs/img-0.png'} />,
          <Card key={6} id={6} isFlipped={false} img={process.env.PUBLIC_URL + '/card-imgs/img-0.png'} />,
        ]}
      />
    </>
  );
}

export default App;
