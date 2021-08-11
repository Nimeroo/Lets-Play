import { useEffect, useState } from "react";
import Layout from "./Components/Layout/Layout.jsx";
import Genres from "./Components/Genres/Genres.jsx";
import GamesHome from "./Screens/GamesHome/GamesHome.jsx";
import NewGameForm from "./Screens/NewGameForm/NewGameForm.jsx";
import Details from "./Screens/GameDetails/GameDetails.jsx";
import "./App.css";
import { Route, useHistory } from "react-router";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import SignUp from "./Screens/SignUp/SignUp.jsx";
import Login from "./Screens/Login/Login.jsx";


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
      <Layout user={currentUser} logout={handleLogout}>
        <Route exact path="/">
          <GamesHome />
        </Route>
        <Route path="/signup">
          <SignUp handleSignUp={handleSignUp}/>
        </Route>
        <Route path="/login">
          <Login login={handleLogin} />;
        </Route>
        <Route path="/game-form">
          <NewGameForm user={currentUser}/>
        </Route>
        <Route exact path="./:name">
          <Details />
        </Route>
        <Route exact path="/">
          <Genres />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
