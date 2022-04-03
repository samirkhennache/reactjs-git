import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/ProfilesUsers/Profile";
import DetailsProfile from "./components/ProfilesUsers/DetailsProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import DetailsRepos from "./components/ProfilesUsers/DetailsRepos";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <DetailsRepos />
        <br />

        <div className="container mt-2">
          <Switch>
            <Route path="/" exact component={Profile} />
            <Route path="/detail" exact component={DetailsProfile} />
            <Route path="/repos/:login" exact component={DetailsRepos} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
