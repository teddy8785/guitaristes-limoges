import Header from "../components/Header";
import Gallery from "../components/Gallery";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Artistes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header>
        <nav>
          <NavLink className="main__link" style={{ margin: 0 }} to={`/Index`}>
            Retour
          </NavLink>
        </nav>
        <h1 className="header__title">GUITARISTES LIMOGES</h1>
      </Header>
      <Gallery />
    </div>
  );
}

export default Artistes;
