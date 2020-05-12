import React, { Fragment, useState, component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./comphonent/layout/Navbar";
import Alert from './comphonent/layout/Alert';
import Home from './comphonent/Pages/Home'
import About from './comphonent/Pages/About';
import User from './comphonent/user/User';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import NotFound from './comphonent/Pages/NotFound'

import "./App.css";


const App = () => {

  // async componentDidMount() {

  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_gITHUB_CLIENTnpm start_SECRET}`)

  //   this.setState({ users: res.data, loading: false });
  //   console.log(res);

  // }



  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact path='/About' component={About}
                />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );

}

export default App;
