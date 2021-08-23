import { Checkbox } from "@material-ui/core";
import genres from "../../util/genres.js";
import "./NewGameform.css";
import { useState } from "react";
import { postGame } from "../../services/games";
import { useHistory } from "react-router-dom";

function NewGameForm({ user }) {
  const [gameName, setGameName] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [gameSummary, setGameSummary] = useState("");
  const [gameScreenshots, setGameScreenshots] = useState([]);
  const [gameGenres, setGameGenres] = useState([]);
  const [gameRating, setGameRating] = useState(0);

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGame = {
      title: gameName,
      thumbnail: gameImage,
      summary: gameSummary,
      screenshot: gameScreenshots,
      genres: gameGenres,
      rating: gameRating,
      user_id: user.id,
    };

    postGame(newGame);
    history.push("/")
  };

  return (
    <div id="form-container">
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="game-title">
          Title:
          <input
            type="text"
            name="gameName"
            id="game-name"
            className="form-input"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          />
        </label>
        <label htmlFor="gameImage">
          Thumbnail:
          <input
            type="file"
            name="gameImage"
            className="game-image-selector"
            accept="image/png, image/jpeg, image/jpg"
            value={gameImage}
            onChange={(e) => setGameImage(e.target.value)}
          />
        </label>
        <label htmlFor="game-platforms">
          Summary:
          <textarea
            type="text"
            name="gameSummary"
            id="game-summary"
            className="form-input"
            value={gameSummary}
            onChange={(e) => setGameSummary(e.target.value)}
          />
        </label>
        <label htmlFor="game-screenshots">
          Game Images/Screenshots:
          <div id="game-screenshot-input">
            <input
              type="file"
              name="gameScreenshots"
              id="game-screenshots"
              className="game-image-selector"
              onChange={(e) => {
                gameScreenshots.push(e.target.value);
                setGameScreenshots(gameScreenshots);
              }}
            />
            <div id="screenshot-preview-cont">
              {gameScreenshots.map((screenshotURL) => {
                return <img id="screenshot-preview" src={screenshotURL}></img>;
              })}
            </div>
          </div>
        </label>
        <label>
          {genres.map((genre) => {
            return (
              <div>
                {genre}
                <Checkbox
                  name="gameGenres"
                  onChange={(e) => {
                    if (e.target.checked) {
                      gameGenres.push(genre);
                      setGameGenres(gameGenres);
                    } else {
                      gameGenres.splice(gameGenres.indexOf(genre), 1);
                      setGameGenres(gameGenres);
                    }
                  }}
                />
              </div>
            );
          })}
        </label>
        <div id="form-buttons-container">
          <button className="form-button" id="game-submit-button" type="submit">
            Publish your game
          </button>

          <button className="form-button">Home</button>
        </div>
      </form>
    </div>
  );
}

export default NewGameForm;
