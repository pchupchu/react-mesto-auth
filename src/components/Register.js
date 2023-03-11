import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="form login__form">
        <label className="form__label">
          <input
            type="email"
            className="form__item login__item"
            id="email"
            name="email"
            placeholder="Email"
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
            required
          />
          <span className="form__item-error password-error"></span>
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
