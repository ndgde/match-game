/* eslint-disable prettier/prettier */
import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const CardState = Object.freeze({
  STANDARD: "standard",
  CORRECT: "correct",
  INCORRECT: "incorrect",
});

export { CardState };

const Card = ({ id, state = CardState.STANDARD, isBlocked = true, className, ...props }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    if (!isBlocked) {
      setIsFlipped(!isFlipped);
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
      <div className="card" onClick={flip}>
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
  id: PropTypes.number,
  state: PropTypes.string,
  isBlocked: PropTypes.bool,
  img: PropTypes.string,
  className: PropTypes.string,
  props: PropTypes.object,
};
