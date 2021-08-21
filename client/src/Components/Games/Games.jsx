import React from "react";
import "./Games.css";

export default function Games({ games }) {
  return (
    <div>
      {games.map((game) => {
        return (
          <div>
            <h1>{game.title}</h1>
            <img id="game-thumbnail" src={game.thumbnail}/>
          </div>
        );
      })}
    </div>
  );
}
