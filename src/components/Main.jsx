import React from "react";
import Card from "./Card";
import data from "../artistes.json";
import "../styles/main.css";

function Main() {
  const maxCards = 4;

  return (
    <main className="main">
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
    </main>
  );
}

export default Main;
