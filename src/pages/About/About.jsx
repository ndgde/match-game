import React from 'react';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import UserIcon from '../../components/UserIcon/UserIcon';
import Main from '../../components/Main/Main';
import List from '../../components/List/List';
import styles from './About.module.scss';

const About = () => {
  return (
    <Layout>
      <>
        <Header user={<UserIcon />} />
        <Main>
          <List
            items={[
              {
                title: 'Register new player in game',
                content: '',
                img: `${process.env.PUBLIC_URL}/register-screenshot.png`,
              },
              {
                title: 'Configure your game settings',
                content: '',
                img: `${process.env.PUBLIC_URL}/game-settings-screenshot.png`,
              },
              {
                title: 'Start you new game! Remember card positions and match it before times up.',
                content: '',
                img: `${process.env.PUBLIC_URL}/game-screenshot.png`,
              },
            ]}
            renderItem={(item, index) => (
              <div className={styles.item_container}>
                <div className={styles.item_left_section}>
                  <h3 className={styles.item_title}>
                    <span className={styles.item_index}>{index + 1}</span>
                    {item.title}
                  </h3>
                  <p className={styles.item_content}>{item.content}</p>
                </div>
                <div className={styles.item_right_section}>
                  <img className={styles.item_img} src={item.img} alt={item.img}></img>
                </div>
              </div>
            )}
          />
        </Main>
      </>
    </Layout>
  );
};

export default About;
