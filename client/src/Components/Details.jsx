import React from "react";
import { Link, useParams } from "react-router-dom";

function Details(props) {
  const params = useParams();
  const gameList = props.gameList;
  const game = gameList.find((currGame) => {
    return currGame.fields.name === params.name;
  });
  return (
    <div className="show-info">
      <h2>{game.fields.name}</h2>
      <h3>Genres: {game.fields.genres}</h3>
      <h3>Developer: {game.fields.developer}</h3>
      <img id="game-image" src={game.fields.images}></img>
      <h5>Platforms: {game.fields.platforms}</h5>
      <h6>Rating: {game.fields.rating}</h6>
      <Link to="/">
        <button id="home-button">Back</button>
      </Link>
    </div>
  );
}

export default Details;
