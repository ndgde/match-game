import React from 'react';
import styles from './Grid.module.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { v5 as uuidv5 } from 'uuid';

const Grid = ({ width, height, cards, namespace }) => {
  const gridStyle = {
    ...(width ? { gridTemplateColumns: `repeat(${width}, 1fr)` } : {}),
    ...(height ? { gridTemplateRows: `repeat(${height}, 1fr)` } : {}),
  };

  return (
    <div className={`grid ${styles.grid}`} style={gridStyle}>
      {cards.map((card, index) => (
        <Card className={styles.item} {...card.props} key={`${uuidv5(card.props.id.toString(), namespace)}-${index}`} />
      ))}
    </div>
  );
};

export default Grid;

Grid.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  cards: PropTypes.array,
  namespace: PropTypes.string,
};
