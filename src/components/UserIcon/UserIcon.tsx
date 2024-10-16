import React from 'react';
import styles from './UserIcon.module.scss';

interface UserIconProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: string;
  onClick?: () => void;
  isAuthorized: boolean;
  style?: React.CSSProperties;
}

const UserIcon: React.FC<UserIconProps> = ({ avatar, onClick, isAuthorized, className = '', style, ...props }) => {
  return (
    <div className={`${styles.icon} ${className}`} style={style} onClick={onClick} {...props}>
      <img
        className={styles.avatar}
        src={isAuthorized && avatar !== null ? avatar : `${process.env.PUBLIC_URL}/unauthenticated-user.png`}
        alt="User Avatar"
      />
    </div>
  );
};

export default UserIcon;
