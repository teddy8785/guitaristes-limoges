import "../styles/header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink className="header__link">Quiz</NavLink>
      </nav>
      <h1 className="header__title">GUITARISTES LIMOGES</h1>
    </header>
  );
}

export default Header;
