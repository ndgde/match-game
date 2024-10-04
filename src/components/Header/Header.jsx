import React from 'react';
import './Header.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Header = ({ user }) => {
  const navigate = useNavigate();
  const [redirectTo, setRedirectTo] = useState(null);

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  }, [redirectTo, navigate]);

  const getTitleBlock = () => (
    <h2 className="header-title">
      <Button className="title-btn" onClick={() => setRedirectTo('/')}>
        <span className="first-section">MATCH</span>
        <span className="second-section">MATCH</span>
      </Button>
    </h2>
  );

  const getNavBlock = (navItems) => (
    <nav className="nav">
      <ul className="nav-list">
        {navItems.map(({ path, sign, text }, index) => (
          <li key={index} className="nav-item">
            <Button className="sign-btn" onClick={() => setRedirectTo(path)}>
              <div className="title-container">
                <span className="title-sign">{sign}</span>
              </div>
            </Button>
            <p className="title-text">{text}</p>
          </li>
        ))}
      </ul>
    </nav>
  );

  const getUserBlock = (user) => (
    <div className="user-field">
      {user.isAuthorized ? (
        <Button className="start-game-btn">start game</Button>
      ) : (
        <Button className="sign-in-btn">sign in</Button>
      )}
      <Button className="user-btn">{user}</Button>
    </div>
  );

  return (
    <header className="header">
      {getTitleBlock()}
      {getNavBlock([
        { path: '/about', sign: '?', text: 'About' },
        { path: '/best-scores', sign: '★', text: 'Best Scores' },
        { path: '/game-settings', sign: '⚙️', text: 'Settings' },
      ])}
      {getUserBlock(user)}
    </header>
  );
};

export default Header;

Header.propTypes = {
  user: PropTypes.element.isRequired,
};
