import React from 'react';
import PropTypes from 'prop-types';
import './UserIcon.css';

const UserIcon = ({ avatar, onClick, className = '', style = {} }) => {
  return (
    <div className={`user-icon ${className}`} style={style} onClick={onClick}>
      <img src={avatar} alt="User Avatar" className="user-avatar" />
    </div>
  );
};

UserIcon.propTypes = {
  avatar: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default UserIcon;
