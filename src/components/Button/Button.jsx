import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    // eslint-disable-next-line prettier/prettier
    <button className={`custom-button ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
