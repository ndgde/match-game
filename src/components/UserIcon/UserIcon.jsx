import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserIcon.module.scss';

const UserIcon = ({ avatar, onClick, isAuthorized, className = '', style = {} }) => {
  return (
    <div className={`${styles.icon} ${className}`} style={style} onClick={onClick}>
      <img
        className={styles.avatar}
        src={isAuthorized && avatar !== null ? avatar : `${process.env.PUBLIC_URL}/unauthenticated-user.png`}
        alt="User Avatar"
      />
    </div>
  );
};

UserIcon.propTypes = {
  avatar: PropTypes.string,
  onClick: PropTypes.func,
  isAuthorized: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default UserIcon;
