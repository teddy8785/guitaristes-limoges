import Header from "../components/Header";
import Main from "../components/Main";
import Card from "../components/Card";
import Contact from "../components/Contact";
import data from "../artistes.json";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";

function Index() {
  const maxCards = 4;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header>
        <i className="fa-solid fa-bars" onMouseEnter={toggleMenu}></i>
        <nav
          onMouseLeave={toggleMenu}
          className={`header__link--container ${
            isMenuOpen ? "" : "header__link--hidden"
          }`}
        >
          <NavLink
            className="header__link"
            to={`/Gallery`}
            onClick={toggleMenu}
          >
            ...Voir tous les guitaristes
          </NavLink>
          <div className="header__ancre--container">
            <HashLink
              smooth
              to="#new"
              className="header__ancre"
              onClick={toggleMenu}
            >
              Nouveau
            </HashLink>
            <HashLink
              smooth
              to="#contact"
              className="header__ancre"
              onClick={toggleMenu}
            >
              contact
            </HashLink>
          </div>
        </nav>
        <h1 className="header__title">GUITARISTES LIMOGES</h1>
      </Header>
      <Main>
        <section id="new">
          <h2 className="main__title">NOUVEAUX</h2>
          <div className="main__gallery">
            {data.slice(-maxCards).map((post) => (
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
        </section>
        <Contact />
      </Main>
    </div>
  );
}

export default Index;
