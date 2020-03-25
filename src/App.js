import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CardListing from "../src/containers/CardListing/CardListing";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={CardListing} />
        </Switch>
    </div>
    );
  }
}

export default App;
