import React from 'react';
import PropTypes from 'prop-types';
import './Wrapper.css';

const Wrapper = ({
  children,
  className = '',
  style = {},
  padding = '0',
  margin = '0',
  backgroundColor = 'transparent',
}) => {
  const wrapperStyle = {
    padding,
    margin,
    backgroundColor,
    ...style,
  };

  return (
    <div className={`wrapper ${className}`} style={wrapperStyle}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  padding: PropTypes.string,
  margin: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Wrapper;
