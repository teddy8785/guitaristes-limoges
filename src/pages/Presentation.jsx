import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import data from "../artistes.json";
import "../styles/presentation.css";
import { useEffect } from "react";
import { gestionErreurPhoto } from "../components/Card";

function Presentation() {
  const { id } = useParams();
  const post = data.find((artiste) => artiste.id === id);

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
        <h1 className="header__title">{post.nom}</h1>
      </Header>
      <Main>
        <section className="presentation">
          <div>
            {post.photo && (
              <img
                className="presentation__image"
                src={`${process.env.PUBLIC_URL}/${post.photo}`}
                alt={post.nom}
                onError={gestionErreurPhoto}
              ></img>
            )}

            {(post.lienx ||
            post.lieninstagram ||
            post.lienyoutube ||
            post.mail) && (
              <div className="presentation__contactcontent">
                <h3>CONTACT</h3>
                <div className="presentation__contact">
                  {post.lienx && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={post.lienx}
                    >
                      X
                    </a>
                  )}
                  {post.lieninstagram && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={post.lieninstagram}
                    >
                      Instagram
                    </a>
                  )}
                  {post.lienyoutube && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={post.lienyoutube}
                    >
                      Youtube
                    </a>
                  )}
                </div>
                <div>{post.mail && <p>{post.mail}</p>}</div>
              </div>
            )}
          </div>
          <div className="presentation__histoire">
            {post.histoire && (
              <>
                <h3>HISTOIRE</h3>
                <p className="texte">{post.histoire}</p>
              </>
            )}
          </div>
        </section>
      </Main>
    </div>
  );
}

export default Presentation;
