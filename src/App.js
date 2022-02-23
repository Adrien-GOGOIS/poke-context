// Style
import "./App.css";

// Import fonctions de state et de context React :
import { createContext, useState } from "react";

// React-router-dom
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// Components
import Home from "./components/Home";
import Login from "./components/Login";

// Context connexion de l'utilisateur :
export const UserContext = createContext({
  isLogged: false,
});

// Context stockage historique pokemons :
export const PokemonContext = createContext({
  stockedPokemons: [],
});

function App() {
  // State de App.js :
  const [isLogged, setLogged] = useState(false);
  const [stockedPokemons, setStockedPokemons] = useState([]);

  // Fonction changement du context connexion de l'utilisateur :
  const setAuth = () => {
    setLogged((prevLogged) => !prevLogged);
  };

  // Fonction pour nettoyer le stockage pokémon en cas de déconnexion de l'utilisateur
  const cleanArray = () => {
    setStockedPokemons([]);
  };

  // On stock le context et la fonction de changement de context dans une constante :
  const value = {
    isLogged: isLogged,
    setAuth: setAuth,
    cleanArray: cleanArray,
    stockedPokemons: stockedPokemons,
  };

  return (
    <UserContext.Provider value={value}>
      {" "}
      {/* On passe la constante aux autres components */}
      <BrowserRouter>
        <nav style={{ color: "white" }}>
          <ul>
            <li>
              <Link to="/" style={{ margin: "20px" }}>
                Home
              </Link>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
