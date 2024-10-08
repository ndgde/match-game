import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserField.module.scss';
import Button from '../../Button/Button';

const UserField = ({ user }) => (
  <div className={styles.container}>
    {user.isAuthorized ? (
      <Button onClick={() => {}} className={styles.start_game_btn}>
        start game
      </Button>
    ) : (
      <Button onClick={() => {}} className={styles.sign_in_btn}>
        sign in
      </Button>
    )}
    <Button onClick={() => {}} className={styles.user_btn}>
      {user}
    </Button>
  </div>
);

UserField.propTypes = {
  user: PropTypes.object,
};

export default UserField;
