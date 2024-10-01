import React from 'react';
import './Grid.css';
import PropTypes from 'prop-types';

const Grid = ({ cards }) => {
  return (
    <div className="grid">
      {cards.map((card) => (
        <div key={card.id} className="grid-item">
          {card}
        </div>
      ))}
    </div>
  );
};

export default Grid;

Grid.propTypes = {
  cards: PropTypes.array,
};
