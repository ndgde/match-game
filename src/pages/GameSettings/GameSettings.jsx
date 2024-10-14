import React from 'react';
import styles from './GameSettings.module.scss';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Layout from '../../components/Layout/Layout';
import Main from '../../components/Main/Main';
import UserIcon from '../../components/UserIcon/UserIcon';

const GameSettings = () => {
  const settings = [
    { id: 1, name: 'Field size', options: ['3x3', '4x4', '5x5'] },
    { id: 2, name: 'Difficulty', options: ['1', '2', '3'] },
  ];

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
                <div className={styles.item_content}>
                  <label htmlFor="dropdown">{setting.name}</label>
                  <div className={styles.custom_select_wrapper}>
                    <select id="dropdown" className={styles.select}>
                      {setting.options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            />
          </div>
        </Main>
      </>
    </Layout>
  );
};

export default GameSettings;
