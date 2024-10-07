/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import './Card.css';
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

  

  const getStatementBlock = (state) => {
    switch (state) {
      case CardState.CORRECT:
        return (
          <div className="overlay green">
            <span className="checkmark">✔️</span>
          </div>
        );
      case CardState.INCORRECT:
        return (
          <div className="overlay red">
            <span className="checkmark">✖</span>
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''} ${className}`} {...props}>
      <div className="card" onClick={onClick}>
        <div className="card-front">
          <img src={process.env.PUBLIC_URL + `/card-imgs/img-${id}.png`} alt="front" />
          {getStatementBlock(state)}
        </div>
        <div className="card-back">
          <img src={process.env.PUBLIC_URL + '/card-imgs/card-back.jpg'} alt="back" />
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
