import React from 'react';
import { arrayOf } from 'prop-types';
import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  state = {
    index: 0,
    typeFilter: 'all',
  };

  filterPokemon = (typeFilter) => {
    this.setState({ typeFilter, index: 0 });
  };

  getFilterPokemon = () => {
    const { pokemonList } = this.props;
    const { typeFilter } = this.state;

    return pokemonList.filter((poke) => {
      if (typeFilter === 'all') return true;
      return poke.type === typeFilter;
    });
  };

  changePokemon = (pokemonsList) => {
    this.setState((prevState) => ({
      index: (prevState.index + 1) % pokemonsList,
    }));
  };

  render() {
    const { index } = this.state;
    const filteredPokemon = this.getFilterPokemon();
    const pokemon = filteredPokemon[index];

    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemon } />
          <div>
            <button
              type="button"
              onClick={ () => this.changePokemon(filteredPokemon.length) }
            >
              Próximo pokémon
            </button>
            <button
              type="button"
              onClick={ () => this.filterPokemon('all') }
            >
              All
            </button>
            <button
              type="button"
              onClick={ () => this.filterPokemon('Normal') }
            >
              Normal
            </button>
            <button
              type="button"
              onClick={ () => this.filterPokemon('Bug') }
            >
              Bug
            </button>
            <button
              type="button"
              onClick={ () => this.filterPokemon('Poison') }
            >
              Poison
            </button>
            <button
              type="button"
              onClick={ () => this.filterPokemon('Dragon') }
            >
              Dragon
            </button>
            <button
              type="button"
              onClick={ () => this.filterPokemon('Electric') }
            >
              Electric
            </button>
            <button
              type="button"
              onClick={ () => this.filterPokemon('Fire') }
            >
              Fire
            </button>
            <button
              type="button"
              onClick={ () => this.filterPokemon('Psychic') }
            >
              Psychic
            </button>
          </div>
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
