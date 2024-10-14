import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.scss';

const Dropdown = ({ label, options, onSelect, defaultValue = '', className = '' }) => {
  const [value, setValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!defaultValue && options.length > 0) {
      setValue(options[0]);
    }
  }, [options, defaultValue]);

  useEffect(() => {
    onSelect(value);
  }, [value, onSelect]);

  const handleChange = (option) => {
    setValue(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`${styles.dropdown_wrapper} ${className}`} ref={dropdownRef}>
      <label htmlFor="dropdown">{label}</label>
      <div className={styles.custom_select_wrapper} onClick={toggleDropdown}>
        <div className={`${styles.selected} ${isOpen ? styles.open : ''}`}>
          {value}
          <span className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`}>▼</span>
        </div>
        {isOpen && (
          <div className={styles.options}>
            {options.map((option, index) => (
              <div key={index} className={styles.option} onClick={() => handleChange(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
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
