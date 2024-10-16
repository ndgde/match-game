import React from 'react';
import styles from './WonWindow.module.scss';
import OverlayModal from '../../OverlayModal/OverlayModal';
import Button from '../../Button/Button';

interface WonWindowProps {
  elapsedTime: string;
  score: number;
  onConfirm: () => void;
}

const WonWindow: React.FC<WonWindowProps> = ({ elapsedTime, score, onConfirm }) => (
  <OverlayModal>
    <div className={styles.container}>
      <h2 className={styles.title}>
        Congratulations! You successfully found all the matches in&nbsp;
        <span className={styles.span}>{elapsedTime}</span> and scored&nbsp;
        <span className={styles.span}>{score}</span> points
      </h2>
      <Button className={styles.ok_btn} onClick={onConfirm}>
        ok
      </Button>
    </div>
  </OverlayModal>
);

export default WonWindow;
