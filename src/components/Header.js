import { Link, useLocation, useNavigate } from "react-router-dom";

function Header({ loggedIn, isEmail }) {
  const navigate = useNavigate();
  const location = useLocation();

  function signOut() {
    localStorage.removeItem("token");
    navigate("/sign-in", { replace: true });
  }

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
      </div>
    </header>
  );
}

export default Header;
