import { Link, useLocation, useNavigate } from "react-router-dom";

function Header({ loggedIn, isEmail, isBurger, handleBurgerMenu, signOut }) {
  const navigate = useNavigate();
  const location = useLocation();

  function signUp() {
    navigate("/sign-up", { replace: true });
  }

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__auth">
        {location.pathname === "/" && (
          <p className="header__login">{loggedIn ? isEmail : ""}</p>
        )}
        {location.pathname === "/" && (
          <Link className="header__link" to="/sign-in" onClick={signOut}>
            Выйти
          </Link>
        )}
      </div>
      {location.pathname === "/" && (
        <div className="header__burger" onClick={handleBurgerMenu}>
          <span
            className={`header__burger-line ${
              isBurger ? "header__burger-line_active" : ""
            }`}
          ></span>
          <span
            className={`header__burger-line ${
              isBurger ? "header__burger-line_active" : ""
            }`}
          ></span>
          <span
            className={`header__burger-line ${
              isBurger ? "header__burger-line_active" : ""
            }`}
          ></span>
        </div>
      )}
      {location.pathname === "/sign-in" && (
        <Link className="header__link" to="/sign-up" onClick={signUp}>
          Регистрация
        </Link>
      )}
      {location.pathname === "/sign-up" && (
        <Link className="header__link" to="/sign-in" onClick={signOut}>
          Войти
        </Link>
      )}
    </header>
  );
}

export default Header;
