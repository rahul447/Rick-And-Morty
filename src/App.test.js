import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/cards";
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
