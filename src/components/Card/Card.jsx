/* eslint-disable prettier/prettier */
import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ img, isFlipped = false }) => {
  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="card">
        <div className="card-front">
          <img src={img} alt="front" />
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
  img: PropTypes.string,
  isFlipped: PropTypes.boll,
};
