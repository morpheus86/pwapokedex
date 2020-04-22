import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import "tachyons";

import Client from "./containers/Client";

import registerServiceWorker from "./serviceWorker";
import {
  requestPokemons,
  searchPokemons,
  requestPokemon,
  requestPokemonSpecies,
} from "./reducer";

import "./index.css";

const rootReducers = combineReducers({
  requestPokemons,
  searchPokemons,
  requestPokemon,
  requestPokemonSpecies,
});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Client />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
