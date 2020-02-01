import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/main.css";
import Head from "./components/Head";
import Banner from "./components/Banner";
import HeaderComponent from "./components/HeaderComponent";
import Articles from "./components/Articles";
import ArticlesParent from "./components/ArticlesParent";
import Sidebar from "./components/Sidebar";
import Complete from "./components/complete";
import "./assets/css/login.css";

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect
} from "react-router-dom";
import Addcontract from "./components/Addcontract";

class App extends React.Component {
  state = {
    loggedIn: false,
    username: "",
    password: ""
  };

  handleLogin = () => {
    if (this.state.password === "ameya") {
      this.setState({ loggedIn: true });
    }
    console.log(this.state.loggedIn);
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAuthentication = () => {
    this.history.push("/Home");
  };

  render() {
    // console.log(this.state.loggedIn);
    return (
      <div>
        <Router>
          {/* <div>
            <input type="text" id="tp" name="tp" />
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.userName}
              onChange={this.handleLogin}
            />
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />

            <input type="button" onClick={this.handleLogin} value="login" />
          </div> */}
          <Route path="/" exact strict>
            <div class="login">
              <div class="login-triangle"></div>

              <h2 class="login-header">Log in</h2>

              <form class="login-container">
                <p>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.userName}
                    onChange={this.handleOnChange}
                  />
                </p>
                <p>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleOnChange}
                  />
                </p>
                <p>
                  <Link to="/Home" onClick={this.handleLogin}>
                    Log in
                  </Link>
                  />
                </p>
              </form>
            </div>
          </Route>
          <Route
            path="/Home"
            //={Complete}
            exact
            render={() =>
              this.state.loggedIn === true ? <Complete /> : <Redirect to="/" />
            }
          />
          <Route path="/contract" component={Addcontract} exact />
        </Router>
      </div>
    );
  }
}

export default App;
