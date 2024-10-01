import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Header = ({ user }) => {
  return (
    <header className="header">
      <h2 className="header-title">Match game</h2>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item" href="/play">
            Play
          </li>
          <li className="nav-item" href="/about">
            About
          </li>
          <li className="nav-item" href="/best-score">
            Best Score
          </li>
          <li className="nav-item" href="/game-settings">
            Game Settings
          </li>
        </ul>
      </nav>
      <div className="user-field">
        <Button>{user}</Button>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  user: PropTypes.element.isRequired,
};
