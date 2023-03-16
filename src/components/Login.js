import React, { useState } from "react";

function Login({ handleLogin }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }

    setFormValue({ email: "", password: "" });
    handleLogin(formValue.email, formValue.password);
  };

  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
      <form onSubmit={handleSubmit} className="form login__form">
        <label className="form__label">
          <input
            type="email"
            className="form__item login__item"
            id="email"
            name="email"
            placeholder="Email"
            value={formValue.email}
            onChange={handleChange}
            required
          />
          <span className="form__item-error email-error"></span>
        </label>
        <label className="form__label">
          <input
            type="password"
            className="form__item login__item"
            id="password"
            name="password"
            placeholder="Пароль"
            value={formValue.password}
            onChange={handleChange}
            required
          />
          <span className="form__item-error password-error"></span>
        </label>
        <button type="submit" className="form__button login__button">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
