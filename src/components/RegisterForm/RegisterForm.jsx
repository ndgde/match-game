import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './RegisterForm.module.scss';
import UserIcon from '../UserIcon/UserIcon';
import Button from '../Button/Button';
import OverlayModal from '../OverlayModal/OverlayModal';

const InputField = ({ id, label, type, value, onChange }) => (
  <div className={styles.group}>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
    <input className={styles.input} type={type} id={id} name={id} value={value} onChange={onChange} required />
  </div>
);

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const RegisterForm = ({ onSubmit, onCancel, className, style }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  useEffect(() => {
    const savedData = localStorage.getItem('authToken');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('authToken', JSON.stringify(formData));
  }, [formData]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('authToken');
    onSubmit();
  };

  return (
    <OverlayModal>
      <form className={`${styles.form} ${className || ''}`} style={style || {}} onSubmit={handleSubmit}>
        <header className={styles.header}>
          <h2 className={styles.title}>Register new Player</h2>
        </header>
        <main className={styles.main}>
          <div className={styles.input_field}>
            <InputField id="username" label="username" type="text" value={formData.username} onChange={handleChange} />
            <InputField id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
            <InputField
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className={styles.user_field}>
            <UserIcon className={styles.user_icon} onClick={() => {}} />
          </div>
        </main>
        <footer className={styles.footer}>
          <Button className={styles.add_user_btn} onClick={onSubmit} type="submit">
            add user
          </Button>
          <Button className={styles.cancel_btn} onClick={onCancel}>
            cancel
          </Button>
        </footer>
      </form>
    </OverlayModal>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default RegisterForm;
