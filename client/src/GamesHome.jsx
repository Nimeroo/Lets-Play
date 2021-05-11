function GamesHome(props) {
  const gameSection = props.games.map((game) => {
    return (
      <div>
        <h3>{game.fields.name}</h3>
        <img className="game-list-images" src={game.fields.images}></img>
      </div>
    );
  });
  return <div>{gameSection}</div>;
}

export default GamesHome;
