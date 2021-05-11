import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const url = "https://api.airtable.com/v0/appWBDWQi6vOuApxc/Table%201?api_key=";

function App() {
  const [gameList, setGameList] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(url + API_KEY);
      return resp.data.records;
    };
    setGameList(fetchData);
  }, []);

  return <div className="App"></div>;
}

export default App;
