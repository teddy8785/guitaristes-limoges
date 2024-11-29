import { NavLink } from "react-router-dom";
import "../styles/card.css";

function Card({ id, nom, photo, audio }) {
    return(
    <article className="card">
      <p className="card__name">{nom}</p>
      <NavLink className="card__link" to={`/Artiste/${id}`}>
      <picture>
        {/* <source
            srcSet={`${process.env.PUBLIC_URL}/${photoDown}`}
            media="(max-width: 768px)"
          /> */}
        <img
        className="card__img"
          src={`${process.env.PUBLIC_URL}/${photo}`}
          alt={nom}
        />
      </picture>
      <audio controls className="card__audio">
        <source src={audio} />
      </audio>
      </NavLink>
      
    </article>
  );
}

export default Card;
