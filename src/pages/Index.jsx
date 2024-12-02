import Header from "../components/Header";
import Main from "../components/Main";
import Card from "../components/Card";
import Contact from "../components/Contact";
import data from "../artistes.json";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

function Index() {
  const maxCards = 4;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('ok');
    
  }

  return (
    <div>
      <Header>
        <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
        <NavLink className="header__link" to={`/Gallery`}>
          ...Voir tous les guitaristes
        </NavLink>
        <nav className={`header__ancre--container ${isMenuOpen ? "" : "header__ancre--hidden"}`}>
          <HashLink
            smooth
            to="#new"
            className="header__ancre header__ancre--scroll"
          >
            Nouveau
          </HashLink>
          <HashLink smooth to="#contact" className="header__ancre">
            contact
          </HashLink>
        </nav>
        <h1 className="header__title">GUITARISTES LIMOGES</h1>
      </Header>
      <Main>
        <section id="new" className="main__">
        <h2 className="main__title">
          NOUVEAU
        </h2>
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
        </section>
        <Contact />
      </Main>
     
    </div>
  );
}

export default Index;
