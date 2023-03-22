import { Link } from "react-router-dom";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function Register({ handleSuccessReg }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSuccessReg(values.email, values.password);
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
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          <span
            className={`form__item-error ${
              isValid ? "" : "form__item-error_active"
            }`}
          >
            {errors.email}
          </span>
        </label>
        <label className="form__label">
          <input
            type="password"
            className="form__item login__item"
            id="password"
            name="password"
            placeholder="Пароль"
            minLength="6"
            maxLength="30"
            value={values.password || ""}
            onChange={handleChange}
            required
          />
          <span
            className={`form__item-error ${
              isValid ? "" : "form__item-error_active"
            }`}
          >
            {errors.password}
          </span>
        </label>
        <button type="submit" className="form__button login__button">
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
