import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.scss';

const List = ({ items, renderItem, className = '', style = {} }) => {
  return (
    <ul className={`${styles.list} ${className}`} style={style}>
      {items.map((item, index) => (
        <li className={styles.item} key={index}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default List;
