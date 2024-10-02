import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RegisterForm.css';

const RegisterForm = ({ onSubmit, className = '', style = {} }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={`register-form ${className}`} style={style} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Имя пользователя</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Электронная почта</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default RegisterForm;
