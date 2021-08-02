import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Games from "../../Components/Games/Games.jsx"

function GamesHome(props) {
  const gameSection = props.games.map((game) => {
    return (
      <div>
        <Link className="gameContainerLink" to={`/${game.fields.name}`}>
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
      <Header />
      <div className="game-list">
        {gameSection}
        <Link id="new-game-button-container" to="/game-form">
          <button id="new-game-button">+</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default GamesHome;
