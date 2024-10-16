import React, { useState, useEffect, useRef } from 'react';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
  defaultValue?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect, defaultValue = '', className = '' }) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!defaultValue && options.length > 0) {
      setValue(options[0]);
    }
  }, [options, defaultValue]);

  useEffect(() => {
    onSelect(value);
  }, [value, onSelect]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleChange = (option: string) => {
    setValue(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

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

export default Dropdown;
