import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../utils/auth.js";

function Register() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = formValue;
    auth.register(password, email).then((res) => {
      console.log(res);
      navigate("/sign-in", { replace: true });
    });
  };

  return (
    <section className="login">
      <h2 className="login__title">Регистрация</h2>
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
        <button
          type="submit"
          className="form__button login__button"
          onSubmit={handleSubmit}
        >
          Зарегистрироваться
        </button>
      </form>
      <Link className="login__link" to="/sign-in">
        Уже зарегистрированы? Войти
      </Link>
    </section>
  );
}

export default Register;
