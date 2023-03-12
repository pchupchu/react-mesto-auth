import { Link, useNavigate } from "react-router-dom";

function Header({ loggedIn, isEmail }) {
  const navigate = useNavigate();
  function signOut() {
    localStorage.removeItem("token");
    navigate("/sign-in", { replace: true });
  }

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__auth">
        <p className="header__login">{isEmail}</p>
        <Link className="header__link" to="/sign-up" onClick={signOut}>
          {loggedIn ? "Выйти" : "Войти"}
        </Link>
      </div>
    </header>
  );
}

export default Header;
