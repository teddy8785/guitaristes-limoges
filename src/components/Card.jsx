import { NavLink } from "react-router-dom";
import "../styles/card.css";

export const defaultPhoto = `${process.env.PUBLIC_URL}/photos/sansphoto.webP`;
export const gestionErreurPhoto = (e) => {
  e.target.onerror = null;
  e.target.src = defaultPhoto;
};

function Card({ id, nom, photo, photoDown, audio }) {

  const picturesSources = (
    <picture>
      {photoDown ? (
        <source
          srcSet={`${process.env.PUBLIC_URL}/${photoDown}`}
          media="(max-width: 768px)"
        />
      ) : (
        <source
          srcSet={defaultPhoto}
          media="(max-width: 768px)"
        />
      )}
      <img
        className="card__img"
        src={photo ? `${process.env.PUBLIC_URL}/${photo}` : defaultPhoto}
        alt={nom}
        onError={gestionErreurPhoto}
      />
    </picture>
  );

  return (
    <article className="card">
      <p className="card__name">{nom}</p>
      <NavLink className="card__link" to={`/Artiste/${id}`}>
       {picturesSources}
        {audio && audio.length > 0 && (
          <audio
            controls
            className="card__audio"
            aria-label={`extrait musical de l'artiste nommé ${nom}`}
          >
            <source src={`${process.env.PUBLIC_URL}/${audio}`} />
          </audio>
        )}
      </NavLink>
    </article>
  );
}

export default Card;
