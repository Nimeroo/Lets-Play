import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Form() {
  const [gameName, setGameName] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [gamePlatforms, setGamePlatforms] = useState([]);
  const [gameDevelop, setGameDevelop] = useState("");
  const [gameGenres, setGameGenres] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGame = {
      name: gameName,
      images: gameImage,
      platforms: gamePlatforms,
      developer: gameDevelop,
      genres: gameGenres,
    };

    await axios.post(
      "https://api.airtable.com/v0/appWBDWQi6vOuApxc/Table%201?api_key=" +
        process.env.REACT_APP_AIRTABLE_API_KEY,
      newGame
    );
  };

  return (
    <div>
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
          onChange={(e) => setGamePlatforms(e.target.value)}
        />
        <label htmlFor="game-developer">Game developer:</label>
        <input
          type="text"
          name="gameDevelop"
          id="game-developer"
          value={gameDevelop}
          onChange={(e) => setGameDevelop(e.target.value)}
        />
        <label htmlFor="game-genres">Game genres:</label>
        <input
          type="text"
          name="gameGenres"
          id="game-genres"
          value={gameGenres}
          onChange={(e) => setGameGenres(e.target.value)}
        />

        <button type="submit">Submit your game!</button>
      </form>
    </div>
  );
}

export default Form;
