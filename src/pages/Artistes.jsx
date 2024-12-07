import Header from "../components/Header";
import Main from "../components/Main";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
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
    return data.slice(startIndex, endIndex);
  };

  const changePage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPages(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div>
      <Header>
        <nav className="header__nav">
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />
      </Main>
    </div>
  );
}

export default Artistes;
