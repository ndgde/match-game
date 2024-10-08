import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';
import Button from '../../Button/Button';

const Navigation = ({ items }) => {
  const navigate = useNavigate();
  const [redirectTo, setRedirectTo] = useState(null);

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  }, [redirectTo, navigate]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {items.map(({ path, sign, text }, index) => (
          <li key={index} className={styles.item}>
            <Button className={styles.sign_btn} onClick={() => setRedirectTo(path)}>
              <div className={styles.title_container}>
                <span className={styles.title_sign}>{sign}</span>
              </div>
            </Button>
            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  items: PropTypes.array,
};

export default Navigation;
