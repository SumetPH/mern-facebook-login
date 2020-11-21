import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import ProtectRoute from "./components/ProtectRoute";
import Home from "./views/Home";
import Login from "./views/Login";
import Logout from "./views/Logout";
import Dashboard from "./views/Dashboard";

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("userId")) {
      axios.defaults.headers.common["Authorization"] = localStorage.getItem(
        "userId"
      );
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <ul style={{ display: "flex", listStyle: "none" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <span style={{ margin: "0px 5px" }}>||</span>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <span style={{ margin: "0px 5px" }}>||</span>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <span style={{ margin: "0px 5px" }}>||</span>
            <li>
              {localStorage.getItem("userId") ? (
                <Link to="/logout">Logout</Link>
              ) : null}
            </li>
          </ul>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <ProtectRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
