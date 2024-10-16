import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', ...props }) => {
  return (
    <button className={`btn ${styles.button} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
