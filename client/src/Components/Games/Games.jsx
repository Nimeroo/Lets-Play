import React from "react";
import "./Games.css";
import { Link } from "react-router-dom";

export default function Games({ games }) {
  return (
    <div id="game-list">
      {games.map((game) => {
        return (
          <Link to={`${game.user_id}/${game.id}`} id="game">
            <h4 id="game-title" >{game.title}</h4>
            <img id="game-thumbnail" src={game.thumbnail}/>
          </Link>
        );
      })}
    </div>
  );
}
