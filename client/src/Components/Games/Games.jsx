import React from "react";

export default function Games({ games }) {
  return (
    <div>
      {games.map((game) => {
        return (
          <div>
            <h1>{game.title}</h1>
            <img>{game.thumbnail}</img>
          </div>
        );
      })}
    </div>
  );
}
