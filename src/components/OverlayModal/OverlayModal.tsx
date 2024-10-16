import React, { CSSProperties } from 'react';
import styles from './OverlayModal.module.scss';

interface OverlayModalProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

const OverlayModal: React.FC<OverlayModalProps> = ({ children, className = '', style, ...props }) => {
  return (
    <div className={`${styles.overlay} ${className}`} style={style} {...props}>
      {children}
    </div>
  );
};

export default OverlayModal;
