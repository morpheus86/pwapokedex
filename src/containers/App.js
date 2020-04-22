import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestPokemons } from "../actions";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import "./App.css";

// const CardList = lazy(() => import("../components/CardList"));

const mapStateToProps = (state) => {
  return {
    searchField: state.searchPokemons.searchField,
    pokemons: state.requestPokemons.pokemons,
    isPending: state.requestPokemons.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestPokemons: () => dispatch(requestPokemons()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestPokemons();
  }

  render() {
    const { pokemons, searchField, onSearchChange, isPending } = this.props;
    const filteredPokemons =
      pokemons && searchField.length > 0
        ? pokemons.filter((poke) => {
            return poke.name.toLowerCase().includes(searchField.toLowerCase());
          })
        : pokemons;

    return (
      <div className="tc">
        <h1 className="f1">Pokemons Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        {/* <Scroll> */}
        {isPending ? (
          <h1>Loading</h1>
        ) : (
          <ErrorBoundry>
            <CardList
              pokemons={filteredPokemons}
              isPending={isPending}
              search={searchField}
            />
          </ErrorBoundry>
        )}
        {/* </Scroll> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
