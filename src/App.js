import React, { Component } from 'react';
import { Main } from './route-finder';
import './App.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from "./route-finder/reducers";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <div className="container margin-t-16">
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    );
  }
}

export default App;
