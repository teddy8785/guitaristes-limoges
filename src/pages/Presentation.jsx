import { NavLink, useParams } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import data from "../artistes.json";
import "../styles/presentation.css";

function Presentation() {
  const { id } = useParams();
  const post = data.find((artiste) => artiste.id === id);

  console.log(post);

  return (
    <div>
      <Header>
        <nav>
          <NavLink className="main__link" style={{ margin: 0 }} to={`/Gallery`}>
            Retour
          </NavLink>
        </nav>
        <h1 className="header__title">{post.nom}</h1>
      </Header>
      <Main>
        <section className="presentation">
          <div>
            <img
              className="presentation__image"
              src={`${process.env.PUBLIC_URL}/${post.photo}`}
              alt={post.nom}
            ></img>
            <div className="presentation__contactcontent">
              <h3>CONTACT</h3>
              <div className="presentation__contact">
                <a target="_blank" rel="noopener noreferrer" href={post.lienx}>
                  X
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={post.lieninstagram}
                >
                  Instagram
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={post.lienyoutube}
                >
                  Youtube
                </a>
                <p>{post.mail}</p>
              </div>
            </div>
          </div>
          <div className="presentation__histoire">
            <h3>HISTOIRE</h3>
            <p className="texte">{post.histoire}</p>
            <h3>DISCOGRAPHIE</h3>
          </div>
        </section>
      </Main>
    </div>
  );
}

export default Presentation;
