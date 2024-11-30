import Header from "../components/Header";
import Main from "../components/Main";
import Card from "../components/Card";
import data from "../artistes.json";
import { NavLink } from "react-router-dom";

function Index() {
  const maxCards = 4;

  return (
    <div>
      <Header>
        <NavLink className="main__link" to={`/Gallery`}>
          ...Voir tous les guitaristes
        </NavLink>
        <h1 className="header__title">GUITARISTES LIMOGES</h1>
      </Header>
      <Main>
        <h2 className="main__title">NOUVEAU</h2>
        <div className="main__gallery">
          {data.slice(-maxCards).map((post) => (
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

export default Index;
