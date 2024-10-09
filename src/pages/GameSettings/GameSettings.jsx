import React from 'react';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Layout from '../../components/Layout/Layout';

const GameSettings = () => {
  const settings = [
    { id: 1, name: 'Настройка 1' },
    { id: 2, name: 'Настройка 2' },
  ];

  return (
    <Layout
      header={<Header />}
      content={
        <>
          <h1>Настройки игры</h1>
          <List>
            {settings.map((setting) => (
              <li key={setting.id}>{setting.name}</li>
            ))}
          </List>
        </>
      }
    />
  );
};

export default GameSettings;
