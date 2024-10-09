import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Title.module.scss';
import Button from '../../Button/Button';

const Title = () => {
  const navigate = useNavigate();
  const [redirectTo, setRedirectTo] = useState(null);

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  }, [redirectTo, navigate]);

  return (
    <h2 className={styles.title}>
      <Button className={styles.title_btn} onClick={() => setRedirectTo('/')}>
        <span className={styles.first_section}>match</span>
        <span className={styles.second_section}>match</span>
      </Button>
    </h2>
  );
};

export default Title;
