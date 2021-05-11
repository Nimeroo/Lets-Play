function Genres(props) {
  const compareCatagories = (catagory) => {
    const filteredGames = props.games.filter((game) => {
      return !game.fields.genres.find((cat) => cat == catagory);
    });
    return filteredGames;
  };

  return (
    <div>
      <button onClick={compareCatagories("Adventure")}>Adventure</button>
      <button onClick={compareCatagories("Action")}>Action</button>
      <button onClick={compareCatagories("RPG")}>RPG</button>
      <button onClick={compareCatagories("FPS")}>FPS</button>
      <button onClick={compareCatagories("TPS")}>TPS</button>
      <button onClick={compareCatagories("Battle Royale")}>
        Battle Royale
      </button>
      <button onClick={compareCatagories("Simulation")}>Simulation</button>
      <button onClick={compareCatagories("Social")}>Social</button>
      <button onClick={compareCatagories("Fighter")}>Fighter</button>
      <button onClick={compareCatagories("Sandbox")}>Sandbox</button>
      <button onClick={compareCatagories("Platform games")}>Platformer</button>
    </div>
  );
}

export default Genres;
