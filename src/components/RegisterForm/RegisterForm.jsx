import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RegisterForm.module.scss';

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

const RegisterForm = ({ onSubmit, className, style }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={`${styles.form} ${className || ''}`} style={style || {}} onSubmit={handleSubmit}>
      <InputField
        id="username"
        label="Имя пользователя"
        type="text"
        value={formData.username}
        onChange={handleChange}
      />
      <InputField id="email" label="Электронная почта" type="email" value={formData.email} onChange={handleChange} />
      <InputField id="password" label="Пароль" type="password" value={formData.password} onChange={handleChange} />
      <button className={styles.btn} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default RegisterForm;
