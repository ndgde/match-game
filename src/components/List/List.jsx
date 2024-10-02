import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

const List = ({ items, renderItem, className = '', style = {} }) => {
  return (
    <ul className={`list ${className}`} style={style}>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
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
