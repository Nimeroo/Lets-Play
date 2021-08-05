import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGames } from "../../services/games.js";
import Games from "../../Components/Games/Games.jsx"

function GamesHome() {

  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchGames = async () => {
      const gamelist = await getGames();
      setGames(gamelist);
    };
    fetchGames();
  }, []);

  return (
    <div id="home-container">
      <div className="game-list">
        <Link id="new-game-button-container" to="/game-form">
          <button id="new-game-button">+</button>
        </Link>
        <Games games={games} />
      </div>
    </div>
  );
}

export default GamesHome;
