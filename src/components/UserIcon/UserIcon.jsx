import React from 'react';
import PropTypes from 'prop-types';
import './UserIcon.css';

const UserIcon = ({ avatar, onClick, isAuthorized, className = '', style = {} }) => {
  return (
    <div className={`user-icon ${className}`} style={style} onClick={onClick}>
      <img
        // eslint-disable-next-line prettier/prettier
        src={isAuthorized ? avatar : process.env.PUBLIC_URL + 'unauthenticated-user.png'}
        alt="User Avatar"
        className="user-avatar"
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
