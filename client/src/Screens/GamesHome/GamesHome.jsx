import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGames } from "../../services/games.js";
import Games from "../../Components/Games/Games.jsx"
import "./GamesHome.css"

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
        <Link id="new-game-button-container" to="/game-form">
          <button id="new-game-button">Add Your Creation</button>
        </Link>
      <div className="game-list">
        <Games games={games} />
      </div>
    </div>
  );
} 

export default GamesHome;
