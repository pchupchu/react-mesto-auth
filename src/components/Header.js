import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__auth">
        <p className="header__login">email@link.com</p>
        <Link className="header__link" to="/sign-up">
          Выйти
        </Link>
      </div>
    </header>
  );
}

export default Header;
