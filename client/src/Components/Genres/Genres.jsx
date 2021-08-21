import { useParams, Link } from "react-router-dom";
import genres from "../../util/genres.js";
import React from "react";
import "./Genres.css"

function Genres(props) {
  const games = props.games;
  const compareCatagories = (catagory) => {
    const filteredGames = games.filter((game) => {
      return game.fields.genres.includes(catagory);
    });
    if (filteredGames.length < games.length) {
      props.filteredGames(games);
      props.filteredGames(filteredGames);
    } else {
      props.filteredGames(filteredGames);
    }
  };

  return (
    <div className="genre-list">
      {genres.map((genre) => {
      return(
      <button
        className="genre-button"
        onClick={() => compareCatagories({genre})}
      >
        {genre}
      </button>)})}
    </div>
  );
}

export default Genres;
