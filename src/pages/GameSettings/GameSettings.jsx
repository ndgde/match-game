import React, { useState, useEffect } from 'react';
import styles from './GameSettings.module.scss';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Layout from '../../components/Layout/Layout';
import Main from '../../components/Main/Main';
import UserIcon from '../../components/UserIcon/UserIcon';
import Dropdown from '../../components/Dropdown/Dropdown';

const GameSettings = () => {
  const [fieldSize, setFieldSize] = useState('4x3');
  const [difficulty, setDifficulty] = useState('1');

  useEffect(() => {
    const savedSize = localStorage.getItem('fieldSize');
    if (savedSize) {
      setFieldSize(JSON.parse(savedSize).fieldSize);
    }

    const savedDifficulty = localStorage.getItem('difficulty');
    if (savedDifficulty) {
      setDifficulty(JSON.parse(savedDifficulty).difficulty);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('fieldSize', JSON.stringify({ fieldSize: fieldSize }));
  }, [fieldSize]);

  useEffect(() => {
    localStorage.setItem('difficulty', JSON.stringify({ difficulty: difficulty }));
  }, [difficulty]);

  const settings = [
    { id: 1, name: 'Field size', options: ['4x3', '4x4', '4x5'], defaultValue: fieldSize },
    { id: 2, name: 'Difficulty', options: ['1', '2', '3'], defaultValue: difficulty },
  ];

  const handleSelect = (settingId, selectedOption) => {
    switch (settingId) {
      case 1:
        setFieldSize(selectedOption);
        break;
      case 2:
        setDifficulty(selectedOption);
        break;
      default:
        console.log('error: unknown setting');
    }
  };

  return (
    <Layout>
      <>
        <Header user={<UserIcon />} />
        <Main>
          <div className={styles.container}>
            <List
              className={styles.list}
              items={settings}
              itemClassName={styles.item}
              renderItem={(setting) => (
                <Dropdown
                  key={setting.id}
                  label={setting.name}
                  options={setting.options}
                  onSelect={(selectedOption) => handleSelect(setting.id, selectedOption)}
                  defaultValue={setting.defaultValue}
                />
              )}
            />
          </div>
        </Main>
      </>
    </Layout>
  );
};

export default GameSettings;
