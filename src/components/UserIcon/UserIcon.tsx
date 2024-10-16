import React from 'react';
import styles from './UserIcon.module.scss';

interface UserIconProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: string | null;
  onClick?: () => void;
  isAuthorized: boolean;
  style?: React.CSSProperties;
}

const UserIcon: React.FC<UserIconProps> = ({ avatar, onClick, isAuthorized, className = '', style, ...props }) => {
  let imgSrc: string | undefined = '';
  if (isAuthorized) {
    imgSrc = avatar !== null && avatar !== '' ? avatar : `${process.env.PUBLIC_URL}/default-user-icon.png`;
  } else {
    imgSrc = `${process.env.PUBLIC_URL}/unauthenticated-user.png`;
  }

  return (
    <div className={`${styles.icon} ${className}`} style={style} onClick={onClick} {...props}>
      <img className={styles.avatar} src={imgSrc} alt="User Avatar" />
    </div>
  );
};

export default UserIcon;
