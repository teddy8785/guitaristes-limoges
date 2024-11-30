import React from "react";
import Card from "./Card";
import data from "../artistes.json";
import "../styles/gallery.css";

function Gallery() {

  return (
    <main className="main">
      <h2 className="main__title">Tous les guitaristes</h2>
      <div className="main__gallery">
        {data.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            nom={post.nom}
            photo={post.photo}
            audio={post.audio}
          />
        ))}
      </div>
    </main>
  );
}

export default Gallery;