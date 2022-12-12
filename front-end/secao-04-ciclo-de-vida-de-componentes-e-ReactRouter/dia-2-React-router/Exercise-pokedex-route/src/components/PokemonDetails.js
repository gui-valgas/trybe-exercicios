import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { pokemonType } from '../types';
import Pokemon from './Pokemon';

class PokemonDetails extends React.Component {
  render() {
    const { pokemon, match: { params: { id } } } = this.props;

    const foundPoke = pokemon.find((poke) => poke.id === Number(id));

    return (
      <div>
        <h1>
          {`${foundPoke.name} details`}
        </h1>
        <Pokemon pokemon={ foundPoke } />
        <Link to="/">Voltar a página inicial</Link>
        <h2>Sumário:</h2>
        <span>{ foundPoke.summary }</span>
        <h2>Localização:</h2>
        <div>
          { foundPoke.foundAt.map((local) => (
            <div key={ local.location }>
              <span>{ local.location }</span>
              <img src={ local.map } alt="mapa do pokemon" />
            </div>
          )) }
        </div>
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  pokemon: PropTypes.arrayOf(pokemonType.isRequired).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default PokemonDetails;
