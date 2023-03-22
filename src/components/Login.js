import { useFormAndValidation } from "../hooks/useFormAndValidation";

function Login({ handleLogin }) {
  const { values, handleChange, errors, resetForm, isValid } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }

    resetForm();
    handleLogin(values.email, values.password);
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
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
