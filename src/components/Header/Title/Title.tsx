import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Title.module.scss';
import Button from '../../Button/Button';

const Title: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, authRequired: boolean) => {
    if (authRequired) {
      if (localStorage.getItem('authToken')) {
        navigate(path);
      } else {
        navigate('/about');
      }
    } else {
      navigate(path);
    }
  };

  return (
    <h2 className={styles.title}>
      <Button className={styles.title_btn} onClick={() => handleNavigation('/', true)}>
        <span className={styles.first_section}>match</span>
        <span className={styles.second_section}>match</span>
      </Button>
    </h2>
  );
};

export default Title;
