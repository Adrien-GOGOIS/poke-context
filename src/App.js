import "./App.css";

import { createContext, useState } from "react";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

export const UserContext = createContext({
  isLogged: false,
});

function App() {
  const [isLogged, setLogged] = useState(false);

  const setAuth = () => setLogged(true);

  const value = {
    isLogged: isLogged,
    setAuth: setAuth,
  };

  return (
    <UserContext.Provider value={value}>
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
