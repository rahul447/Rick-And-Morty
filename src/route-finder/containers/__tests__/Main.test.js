import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../main';
import reducers from "../../reducers";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducers, applyMiddleware(thunk));

describe('Main Test', () => {
  it('render correctly', () => {
    const geo = {
      startLatLong: [
        "22.372081",
        "114.107877"
      ],
      dropLatLong: [
        "22.284419",
        "114.159510"
      ]
    }
    const updateInputDetails = jest.fn()
    const resetInputDetails = jest.fn()
    const submitInputDetails = jest.fn()
    const updateCurrentLocation = jest.fn()

    const tree = renderer.create(<Provider store={store}>
      <Main updateInputDetails={updateInputDetails}
        resetInputDetails={resetInputDetails} updateCurrentLocation={updateCurrentLocation}
        submitInputDetails={submitInputDetails} geo={geo} />
    </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});