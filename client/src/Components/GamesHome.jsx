import { Route, Link } from "react-router-dom";

function GamesHome(props) {
  const gameSection = props.games.map((game) => {
    return (
      <div>
        <Link to={`/${game.fields.name}`}>
          <div className="game-display-container">
            <h3 id="game-title">{game.fields.name}</h3>
            <img className="game-list-images" src={game.fields.images}></img>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div id="home-container">
      <header>
        <h1>Lets-Play!</h1>
      </header>
      <div className="game-list">
        {gameSection}
        <Link id="new-game-button-container" to="/game-form">
          <button id="new-game-button">+</button>
        </Link>
      </div>
      <footer></footer>
    </div>
  );
}

export default GamesHome;
