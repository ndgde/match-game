import React from 'react';
import PropTypes from 'prop-types';
import './Wrapper.css';

const Wrapper = ({ children, className = '' }) => {
  return <div className={`wrapper ${className}`}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Wrapper;
