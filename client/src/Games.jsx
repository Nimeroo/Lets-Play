function Games(props) {
  const generateGames = () => {
    let gameSection = props.games.map((game) => {
      return (
        <div>
          <h3>{game.name}</h3>
          <img src={game.image}></img>
        </div>
      );
    });
  };
  return <div>{generateGames}</div>;
}
