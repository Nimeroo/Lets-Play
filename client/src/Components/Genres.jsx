import { useParams, Link } from "react-router-dom";

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
      <button
        className="genre-button"
        onClick={() => compareCatagories("Adventure")}
      >
        Adventure
      </button>
      <button
        className="genre-button"
        onClick={() => compareCatagories("Action")}
      >
        Action
      </button>
      <button className="genre-button" onClick={() => compareCatagories("RPG")}>
        RPG
      </button>
      <button className="genre-button" onClick={() => compareCatagories("FPS")}>
        FPS
      </button>
      <button className="genre-button" onClick={() => compareCatagories("TPS")}>
        TPS
      </button>
      <button
        className="genre-button"
        onClick={() => compareCatagories("Battle Royale")}
      >
        Battle Royale
      </button>
      <button
        className="genre-button"
        onClick={() => compareCatagories("Simulation")}
      >
        Simulation
      </button>
      <button
        className="genre-button"
        onClick={() => compareCatagories("Social")}
      >
        Social
      </button>
      <button
        className="genre-button"
        onClick={() => compareCatagories("Fighter")}
      >
        Fighter
      </button>
      <button
        className="genre-button"
        onClick={() => compareCatagories("Sandbox")}
      >
        Sandbox
      </button>
      <button
        className="genre-button"
        onClick={() => compareCatagories("Platform game")}
      >
        Platformer
      </button>
    </div>
  );
}

export default Genres;
