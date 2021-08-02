import { useEffect, useState } from "react";
import Genres from "./Components/Genres/Genres.jsx";
import GamesHome from "./Screens/GamesHome/GamesHome.jsx";
import Form from "./Screens/NewGameForm/NewGameForm.jsx";
import Details from "./Screens/GameDetails/GameDetails.jsx";
import "./App.css";
import { Route } from "react-router";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleSignUp = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="main">
      <Route path="/game-form">
        <Form />
      </Route>
      <Route exact path="./:name">
        <Details gameList={gameList} />
      </Route>
      <Route exact path="/">
        <Genres filteredGames={setGameList} games={gameList} />
      </Route>
      <Route exact path="/">
        <GamesHome games={gameList} />
      </Route>
    </div>
  );
}

export default App;
