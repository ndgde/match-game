import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Header = ({ user }) => {
  return (
    <header className="header">
      <h2 className="header-title">
        <Button className="title-btn">
          <span className="first-section">MATCH</span>
          <span className="second-section">MATCH</span>
        </Button>
      </h2>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item" href="/about">
            <Button className="sign-btn">
              <div className="title-container">
                <span className="title-sign">?</span>
              </div>
            </Button>

            <p className="title-text">About</p>
          </li>
          <li className="nav-item" href="/best-score">
            <Button className="sign-btn">
              <div className="title-container">
                <span className="title-sign">★</span>
              </div>
            </Button>

            <p className="title-text">Best Score</p>
          </li>
          <li className="nav-item" href="/game-settings">
            <Button className="sign-btn">
              <div className="title-container">
                <span className="title-sign">⚙️</span>
              </div>
            </Button>

            <p className="title-text">Game Settings</p>
          </li>
        </ul>
      </nav>
      <div className="user-field">
        {user.isAuthorized ? (
          <Button class="start-game-btn">start game</Button>
        ) : (
          <Button className="sign-in-btn">sign in</Button>
        )}
        <Button className="user-btn">{user}</Button>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  user: PropTypes.element.isRequired,
};
