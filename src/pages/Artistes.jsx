import Header from "../components/Header";
import Main from "../components/Main";
import Card from "../components/Card";
import data from "../artistes.json";
import { useEffect, useState } from "react";

function Artistes() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const maxCards = 20;
const totalPages = Math.ceil(data.length / maxCards);
const [currentPage, setCurrentPages] = useState(1);

const getCurrentPageData = () => {
  const startIndex = (currentPage - 1) * maxCards;
  const endIndex = startIndex + maxCards;
  return data.slice(startIndex,endIndex);
}

const changePage = (page) => {
  if (page > 0 && page <= totalPages) {
    setCurrentPages(page);
    window.scrollTo(0, 0);
  }
}

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
        <h2 className="main__title">TOUS LES GUITARISTES</h2>
        <div className="main__pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`main__pagination--button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => changePage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
        <div className="main__gallery">
          {getCurrentPageData().map((post) => (
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
        <div className="main__pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`main__pagination--button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => changePage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
      </Main>

     
    </div>
  );
}

export default Artistes;
