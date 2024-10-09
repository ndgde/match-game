/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './WonWindow.module.scss';
import OverlayModal from '../../OverlayModal/OverlayModal';
import Button from '../../Button/Button';

const WonWindow = ({ elapsedTime, score, onConfirm }) => (
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

WonWindow.propTypes = {
  elapsedTime: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default WonWindow;
