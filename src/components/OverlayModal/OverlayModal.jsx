import React from 'react';
import PropTypes from 'prop-types';
import styles from './OverlayModal.module.scss';

const OverlayModal = ({ children, className, style }) => {
  return (
    <div className={`${styles.overlay} ${className}`} style={style}>
      {children}
    </div>
  );
};

OverlayModal.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default OverlayModal;
