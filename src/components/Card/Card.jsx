/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

const CardState = Object.freeze({
  STANDARD: 'standard',
  CORRECT: 'correct',
  INCORRECT: 'incorrect',
});

export { CardState };

const Card = ({ id, callback, isGameActive, className, ...props }) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);
  const [state, setState] = useState(Card.STANDARD);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setTimeout(flip, 700);
  }, []);

  useEffect(() => {
    if (state == CardState.CORRECT) {
      setIsFlipped(true);
      setIsBlocked(true);
    } else if (state == CardState.INCORRECT) {
      setTimeout(() => {
        setIsBlocked(false);
        setIsFlipped(false);
        setState(CardState.STANDARD);
      }, 500);
    }
  }, [state]);

  const approve = (approval) => setState(approval ? CardState.CORRECT : CardState.INCORRECT);

  const onClick = () => {
    if (isGameActive && !isBlocked) {
      flip();
      setIsBlocked(true);
      callback(id, approve);
    }
  };

  return (
    <div className={`card ${styles.container} ${isFlipped ? 'flipped' : ''} ${className}`} {...props}>
      <div className={styles.card} onClick={onClick}>
        
        <div className={styles.front}>
          <img className={styles.img} src={`${process.env.PUBLIC_URL}/card-imgs/img-${id}.png`} alt="front" />
          {state === CardState.CORRECT && (
            <div className={`${styles.overlay} ${styles.green}`}>
              <span className={styles.checkmark}>✔️</span>
            </div>
          )}
          {state === CardState.INCORRECT && (
            <div className={`${styles.overlay} ${styles.red}`}>
              <span className={styles.checkmark}>✖</span>
            </div>
          )}
        </div>
        <div className={styles.back}>
          <img className={styles.img} src={`${process.env.PUBLIC_URL}/card-imgs/card-back.jpg`} alt="back" />
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
  isGameActive: PropTypes.bool.isRequired,
  className: PropTypes.string,
  props: PropTypes.object,
};
