import React from 'react';
import styles from './GameSettings.module.scss';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Layout from '../../components/Layout/Layout';
import Main from '../../components/Main/Main';
import UserIcon from '../../components/UserIcon/UserIcon';

const GameSettings = () => {
  const settings = [
    { id: 1, name: 'Настройка 1' },
    { id: 2, name: 'Настройка 2' },
  ];

  return (
    <Layout>
      <>
        <Header user={<UserIcon />} />
        <Main>
          <div className={styles.container}>
            <List
              items={settings}
              itemClassName={styles.item}
              renderItem={(setting) => (
                <div className={styles.item_content}>
                  <label htmlFor="dropdown">{setting.name}</label>
                  <div className={styles.custom_select_wrapper}>
                    <select id="dropdown" className={styles.select}>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
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
