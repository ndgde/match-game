import React from 'react';
import PropTypes from 'prop-types';
import styles from './Wrapper.module.scss';

const Wrapper = ({ children, className = '' }) => {
  return <div className={`wrapper ${styles.container} ${className}`}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Wrapper;
