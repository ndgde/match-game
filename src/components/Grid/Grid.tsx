import React from 'react';
import styles from './Grid.module.scss';
import Card, { CardProps } from '../Card/Card';
import { v5 as uuidv5 } from 'uuid';

interface GridProps {
  width?: number;
  height?: number;
  cards: Array<{ props: CardProps }>;
  namespace: string;
}

const Grid: React.FC<GridProps> = ({ width, height, cards, namespace }) => {
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
