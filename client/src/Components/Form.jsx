import { useState } from "react";

function Form() {
  const [gameName, setGamesName] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [gamePlatforms, setGamePlatforms] = useState([]);
  const [gameDevelop, setGameDevelop] = useState("");
  const [gameGenres, setGameGenres] = useState([]);

  return (
    <div>
      <form>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <button></button>
      </form>
    </div>
  );
}

export default Form;
