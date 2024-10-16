import React from 'react';
import styles from './Wrapper.module.scss';

const Wrapper: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => {
  return (
    <div className={`wrapper ${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
