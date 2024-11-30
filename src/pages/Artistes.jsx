import Header from "../components/Header";
import Main from "../components/Main";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Card from "../components/Card";
import data from "../artistes.json";

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
      <Main>
        <h2 className="main__title">Tous les guitaristes</h2>
        <div className="main__gallery">
          {data.map((post) => (
            <Card
              key={post.id}
              id={post.id}
              nom={post.nom}
              photo={post.photo}
              audio={post.audio}
            />
          ))}
        </div>
      </Main>
    </div>
  );
}

export default Artistes;
