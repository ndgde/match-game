import React from 'react';
import styles from './Card.module.scss';

const CardState = Object.freeze({
  STANDARD: 'standard',
  CORRECT: 'correct',
  INCORRECT: 'incorrect',
});

export { CardState };

interface CardProps {
  id: number;
  index: number;
  state: 'standard' | 'correct' | 'incorrect';
  isFlipped: boolean;
  onClick: (id: number) => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ id, index, state, isFlipped, onClick, className, ...props }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div
      className={`${styles.container} ${isFlipped ? styles.flipped : ''} ${className}`}
      onClick={handleClick}
      {...props}>
      <div className={styles.card}>
        <div className={styles.card__front}>
          <img
            className={styles.card__front__img}
            src={`${process.env.PUBLIC_URL}/card-imgs/img-${index}.png`}
            alt="front"
            rel="preload"
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
            rel="preload"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
