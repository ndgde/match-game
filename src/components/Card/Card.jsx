/* eslint-disable prettier/prettier */
import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Card = ({ id, img, isFlipped = false, onClick }) => {
  return (
    <Button>
      <div className="card" onClick={() => onClick(id)}>
        {isFlipped ? <img src={img} alt="the image is not loaded" /> : <div className="card-back">?</div>}
      </div>
    </Button>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  isFlipped: PropTypes.boll,
  onClick: PropTypes.func,
};
