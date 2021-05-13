import { Link } from "react-router-dom";

function GamesHome(props) {
  const gameSection = props.games.map((game) => {
    return (
      <div>
        <h3>{game.fields.name}</h3>
        <img className="game-list-images" src={game.fields.images}></img>
      </div>
    );
  });
  return (
    <div>
      {gameSection}
      <Link to="/game-form">
        <button>Add New Game</button>
      </Link>
    </div>
  );
}

export default GamesHome;
