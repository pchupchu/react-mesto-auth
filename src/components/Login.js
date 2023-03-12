import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as auth from "../utils/auth.js";

function Login({ handleLogin }) {
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
    if (!formValue.email || !formValue.password) {
      return;
    }
    auth
      .authorize(formValue.email, formValue.password)
      .then((data) => {
        console.log(data);
        if (data.token) {
          setFormValue({ email: "", password: "" });
          handleLogin();
          navigate("/", { replace: true });
        }
      })
      .catch((err) => console.log(err));
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
        <button
          onSubmit={handleSubmit}
          type="submit"
          className="form__button login__button"
        >
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
