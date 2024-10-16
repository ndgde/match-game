import React from 'react';
import styles from './List.module.scss';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  itemClassName?: string;
  style?: React.CSSProperties;
}

const List = <T,>({ items, renderItem, className = '', itemClassName = '', style = {} }: ListProps<T>) => {
  return (
    <ul className={`${styles.list} ${className}`} style={style}>
      {items.map((item: T, index: number) => (
        <li className={`${styles.item} ${itemClassName}`} key={index}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
};

export default List;
