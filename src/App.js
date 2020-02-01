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
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Addcontract from "./components/Addcontract";

class App extends React.Component {
  render() {
    return (
      <Router>
        {" "}
        <Route path="/" component={Complete} exact />
        <Route path="/contract" component={Addcontract} exact />
      </Router>
    );
  }
}

export default App;
