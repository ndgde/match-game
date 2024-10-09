import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './UserField.module.scss';
import Button from '../../Button/Button';
import RegisterForm from '../../RegisterForm/RegisterForm';

const UserField = ({ user }) => {
  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('registerFormData');
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
    localStorage.removeItem('registerFormData');
    setIsAuthenticated(false);
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
        {user}
      </Button>
      {isRegisterFormVisible && (
        <RegisterForm onSubmit={() => setIsAuthenticated(true)} onCancel={() => setIsRegisterFormVisible(false)} />
      )}
    </div>
  );
};

UserField.propTypes = {
  user: PropTypes.object,
};

export default UserField;
