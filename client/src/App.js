import { useEffect, useState } from "react";
import axios from "axios";
import Genres from "./Genres.jsx";
import GamesHome from "./GamesHome.jsx";
import "./App.css";
import { Route } from "react-router";

const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const url = "https://api.airtable.com/v0/appWBDWQi6vOuApxc/Table%201?api_key=";

function App() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(url + API_KEY);
      const gameArr = resp.data.records;
      setGameList(gameArr);
    };
    fetchData();
  }, []);

  console.log(gameList);

  return (
    <div>
      <Genres games={gameList} />
      <Route exact path="/">
        <GamesHome games={gameList} />
      </Route>
    </div>
  );
}

export default App;
