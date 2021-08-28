import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGames } from "../../services/games.js";
import Games from "../../Components/Games/Games.jsx";
import Genres from "../../Components/Genres/Genres.jsx";
import "./GamesHome.css";

function GamesHome({ user }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const gamelist = await getGames();
      setGames(gamelist);
    };
    fetchGames();
  }, []);

  const userVerify = () => {
    let newGameRedirect = "";
    user ? (newGameRedirect = "/game-form") : (newGameRedirect = "/login");
    return newGameRedirect;
  };

  return (
    <div id="home-container">
      <Genres />
      <div id="game-options">
        <Link id="new-game-button-container" to={userVerify}>
          <button id="new-game-button">Add Your Creation</button>
        </Link>
        <Games games={games} />
      </div>
    </div>
  );
}

export default GamesHome;
