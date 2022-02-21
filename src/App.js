import "./App.css";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ color: "white" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
