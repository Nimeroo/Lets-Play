import React from "react";
import "./Games.css";

export default function Games({ games }) {
  return (
    <div id="game-list">
      {games.map((game) => {
        return (
          <div id="game">
            <h4 id="game-title" >{game.title}</h4>
            <img id="game-thumbnail" src={game.thumbnail}/>
          </div>
        );
      })}
    </div>
  );
}
