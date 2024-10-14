import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Title from './Title/Title';
import Navigation from './Navigation/Navigation';
import UserField from './UserField/UserField';

const Header = ({ user }) => (
  <header className={`header ${styles.header}`}>
    <Title />
    <Navigation
      items={[
        { path: '/about', authRequired: false, img: `${process.env.PUBLIC_URL}/nav-about-icon.svg`, text: 'About' },
        {
          path: '/best-scores',
          authRequired: true,
          img: `${process.env.PUBLIC_URL}/nav-best-scores-icon.svg`,
          text: 'Best Scores',
        },
        {
          path: '/game-settings',
          authRequired: true,
          img: `${process.env.PUBLIC_URL}/nav-settings-icon.svg`,
          text: 'Settings',
        },
      ]}
    />
    <UserField user={user} />
  </header>
);

export default Header;

Header.propTypes = {
  user: PropTypes.element.isRequired,
};
