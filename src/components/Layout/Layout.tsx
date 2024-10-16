import React from 'react';
import styles from './Layout.module.scss';

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => {
  return (
    <div className={`${styles.layout} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Layout;
