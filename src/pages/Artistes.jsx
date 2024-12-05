import Header from "../components/Header";
import Main from "../components/Main";
import Card from "../components/Card";
import data from "../artistes.json";
import { useEffect } from "react";

function Artistes() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header>
        <nav>
        <button
            className="header__button"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            Retour
          </button>
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
              photoDown={post.photoDown}
              audio={post.audio}
              annonce={post.annonce}
            />
          ))}
        </div>
      </Main>
    </div>
  );
}

export default Artistes;
