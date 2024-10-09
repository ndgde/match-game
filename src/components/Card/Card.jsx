/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';

const CardState = Object.freeze({
  STANDARD: 'standard',
  CORRECT: 'correct',
  INCORRECT: 'incorrect',
});

export { CardState };

const Card = ({ id, index, state, isFlipped, onClick, className, ...props }) => {
  return (
    <div
      className={`${styles.container} ${isFlipped ? styles.flipped : ''} ${className}`}
      onClick={() => onClick(id)}
      {...props}
    >
      <div className={styles.card}>
        <div className={styles.card__front}>
          <img
            className={styles.card__front__img}
            src={`${process.env.PUBLIC_URL}/card-imgs/img-${index}.png`}
            alt="front"
          />
          {state === CardState.CORRECT && (
            <div className={`${styles.card__front__overlay} ${styles.green}`}>
              <div className={`${styles.card__front__overlay__checkmark} ${styles.green}`}>
                <span>✔️</span>
              </div>
            </div>
          )}
          {state === CardState.INCORRECT && (
            <div className={`${styles.card__front__overlay} ${styles.red}`}>
              <div className={`${styles.card__front__overlay__checkmark} ${styles.red}`}>
                <span>✖</span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.card__back}>
          <img
            className={styles.card__back__img}
            src={`${process.env.PUBLIC_URL}/card-imgs/card-back.jpg`}
            alt="back"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  props: PropTypes.object,
};
