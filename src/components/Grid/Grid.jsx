import React from 'react';
import './Grid.css';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Grid = ({ width, height, cards }) => {
  const gridStyle = {
    ...(width ? { gridTemplateColumns: `repeat(${width}, 1fr)` } : {}),
    ...(height ? { gridTemplateRows: `repeat(${height}, 1fr)` } : {}),
  };

  return (
    <div className="grid" style={gridStyle}>
      {cards.map((card, index) => (
        <Card className="grid-item" {...card.props} key={index} />
      ))}
    </div>
  );
};

export default Grid;

Grid.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  cards: PropTypes.array,
};
