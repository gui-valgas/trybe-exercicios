import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import mockFetch from './__mocks__/mockFetch';
import renderWithRedux from './helpers/renderWithRedux';
import userEvent from '@testing-library/user-event';
import App from './App';
import randomNumber from './utils/randomNumber';

jest.mock('./utils/randomNumber');

describe('Página principal', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  test('1 - Verifica se o botão de "Próximo Pokémon" está presente na tela', async () => {
    renderWithRedux(<App />);

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    expect(global.fetch).toHaveBeenCalledTimes(1);

    const button = await screen.findByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('2 - Verifica se foi feita uma requisição à API após carregar a página', async () => {
    const pokemonId = 656;
    const pokemonEndPoint = 'https://pokeapi.co/api/v2/pokemon/656/';
    
    randomNumber.mockReturnValue(pokemonId);
    
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(pokemonEndPoint);
  });

  test('3 - Verifica se o endpoint da requisição é alterado ao clicar no botão', async () => {
    const pokemonId = 656;
    const pokemonEndPoint = 'https://pokeapi.co/api/v2/pokemon/656/';
    
    const secondPokemonId = 96;
    const secondEndpoint = 'https://pokeapi.co/api/v2/pokemon/96/';
    
    randomNumber.mockReturnValue(secondPokemonId);
    
    randomNumber.mockReturnValueOnce(pokemonId);
  
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(pokemonEndPoint);

    const button = await screen.findByRole('button');

    userEvent.click(button);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(secondEndpoint);
  });

  test('4 - Verifica se os elementos contendo as informações do Pokémon são renderizados', async () => {
    renderWithRedux(<App />);
    

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    const pokeName = screen.getByTestId('pokemon-name');
    const pokeImage = screen.getByAltText('pokemon');

    expect(pokeName).toBeInTheDocument();
    expect(pokeImage).toBeInTheDocument();
  });
});
