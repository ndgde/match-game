import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.scss';

const Dropdown = ({ label, options, onSelect, defaultValue = '', className = '' }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (!defaultValue && options.length > 0) {
      setValue(options[0]);
    }
  }, [options, defaultValue]);

  useEffect(() => {
    onSelect(value);
  }, [value, onSelect]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`${styles.dropdown_wrapper} ${className}`}>
      <label htmlFor="dropdown">{label}</label>
      <div className={styles.custom_select_wrapper}>
        <select id="dropdown" className={styles.select} value={value} onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
};

export default Dropdown;
