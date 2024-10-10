import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.scss';

const List = ({ items, renderItem, className = '', itemClassName, style = {} }) => {
  return (
    <ul className={`${styles.list} ${className}`} style={style}>
      {items.map((item, index) => (
        <li className={`${styles.item} ${itemClassName}`} key={index}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  style: PropTypes.object,
};

export default List;
