import React, { useState, useEffect } from 'react';
import styles from './UserField.module.scss';
import Button from '../../Button/Button';
import RegisterForm from '../../RegisterForm/RegisterForm';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../../UserIcon/UserIcon';

const UserField = () => {
  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setIsRegisterFormVisible(false);
    }
  }, [isAuthenticated]);

  const logOut = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate('/about');
  };

  return (
    <div className={styles.container}>
      {isAuthenticated ? (
        <Button onClick={() => logOut()} className={styles.start_game_btn}>
          log out
        </Button>
      ) : (
        <Button onClick={() => setIsRegisterFormVisible(true)} className={styles.sign_in_btn}>
          sign in
        </Button>
      )}
      <Button onClick={() => (isAuthenticated ? '' : setIsRegisterFormVisible(true))} className={styles.user_btn}>
        <UserIcon className={styles.icon} />
      </Button>
      {isRegisterFormVisible && (
        <RegisterForm onSubmit={() => setIsAuthenticated(true)} onCancel={() => setIsRegisterFormVisible(false)} />
      )}
    </div>
  );
};

export default UserField;
