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
        { path: '/about', authRequired: false, sign: '?', text: 'About' },
        { path: '/best-scores', authRequired: true, sign: '★', text: 'Best Scores' },
        { path: '/game-settings', authRequired: true, sign: '⚙️', text: 'Settings' },
      ]}
    />
    <UserField user={user} />
  </header>
);

export default Header;

Header.propTypes = {
  user: PropTypes.element.isRequired,
};
