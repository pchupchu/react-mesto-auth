import { Link, useLocation } from "react-router-dom";

function Navbar({ isEmail, isNavbarOpen, signOut }) {
  const location = useLocation();

  return (
    <div
      className={`header__auth-navbar_hidden ${
        isNavbarOpen ? "header__auth-navbar" : ""
      }`}
    >
      {location.pathname === "/" && <p className="header__login">{isEmail}</p>}
      {location.pathname === "/" && (
        <Link className="header__link" to="/sign-in" onClick={signOut}>
          Выйти
        </Link>
      )}
    </div>
  );
}

export default Navbar;
