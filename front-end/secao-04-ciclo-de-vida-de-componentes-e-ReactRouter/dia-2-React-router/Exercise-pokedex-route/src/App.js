import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/pokemon/:id"
            render={ (props) => (
              <PokemonDetails { ...props } pokemon={ pokemonList } />) }
          />
          <Route path="/about" component={ About } />
          <Route path="/" render={ () => <Pokedex pokemonList={ pokemonList } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
