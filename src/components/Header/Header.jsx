import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Header = ({ user }) => {
  const navigate = useNavigate();
  const [redirectTo, setRedirectTo] = useState(null);

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  }, [redirectTo, navigate]);

  return (
    <header className="header">
      <h2 className="header-title">
        <Button className="title-btn" onClick={() => setRedirectTo('/')}>
          <span className="first-section">MATCH</span>
          <span className="second-section">MATCH</span>
        </Button>
      </h2>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Button className="sign-btn" onClick={() => setRedirectTo('/about')}>
              <div className="title-container">
                <span className="title-sign">?</span>
              </div>
            </Button>
            <p className="title-text">About</p>
          </li>
          <li className="nav-item">
            <Button className="sign-btn" onClick={() => setRedirectTo('/best-scores')}>
              <div className="title-container">
                <span className="title-sign">★</span>
              </div>
            </Button>
            <p className="title-text">Best Score</p>
          </li>
          <li className="nav-item">
            <Button className="sign-btn" onClick={() => setRedirectTo('/game-settings')}>
              <div className="title-container">
                <span className="title-sign">⚙️</span>
              </div>
            </Button>
            <p className="title-text">Settings</p>
          </li>
        </ul>
      </nav>
      <div className="user-field">
        {user.isAuthorized ? (
          <Button className="start-game-btn" onClick={() => {}}>
            start game
          </Button>
        ) : (
          <Button className="sign-in-btn" onClick={() => {}}>
            sign in
          </Button>
        )}
        <Button className="user-btn" onClick={() => {}}>
          {user}
        </Button>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  user: PropTypes.element.isRequired,
};
