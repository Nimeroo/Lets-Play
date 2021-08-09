import { useState } from "react";
import { postGame } from "../../services/games";
import { Link } from "react-router-dom";

function Form() {
  const [gameName, setGameName] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [gameSummary, setGameSummary] = useState("");
  const [gameScreenshots, setGameScreenshots] = useState([]);
  const [gameGenres, setGameGenres] = useState("");
  const [gameRating, setGameRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGame = {
      title: gameName,
      thumbnail: gameImage,
      summary: gameSummary,
      screenshot: gameScreenshots,
      genres: gameGenres,
      rating: gameRating,
    };

    postGame(newGame)
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="game-name">Game Name:</label>
        <input
          type="text"
          name="gameName"
          id="game-name"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />
        <label htmlFor="game-image">Game image link:</label>
        <input
          type="text"
          name="gameImage"
          id="game-image"
          value={gameImage}
          onChange={(e) => setGameImage(e.target.value)}
        />
        <label htmlFor="game-platforms">Game platforms:</label>
        <input
          type="text"
          name="gamePlatforms"
          id="game-platforms"
          value={gamePlatforms}
          onChange={(e) => setGameSummary(e.target.value)}
        />
        <label htmlFor="game-developer">Game developer:</label>
        <input
          type="text"
          name="gameDevelop"
          id="game-developer"
          value={gameDevelop}
          onChange={(e) => setGameScreenshots(e.target.value)}
        />
        <label htmlFor="game-genres">Game genres:</label>
        <input
          type="text"
          name="gameGenres"
          id="game-genres"
          value={gameGenres}
          onChange={(e) => setGameGenres(e.target.value)}
        />
        <label htmlFor="game-rating">Game rating:</label>
        <input
          type="text"
          name="gameGenres"
          id="game-rating"
          value={gameRating}
          onChange={(e) => setGameRating(e.target.value)}
        />
        <button id="game-submit-button" type="submit">
          Submit your game!
        </button>
        <Link exact to="/">
          <button>home</button>
        </Link>
      </form>
    </div>
  );
}

export default Form;
