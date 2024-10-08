import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <button className={`btn ${styles.button} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  props: PropTypes.object,
};

export default Button;
