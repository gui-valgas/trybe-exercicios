import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import renderWithRedux from './helpers/renderWithRedux';
import userEvent from '@testing-library/user-event';

test('A página deve renderizar dois botões e o número "0"', () => {
  renderWithRedux(<App />);
  const buttonAdicionar = screen.queryAllByRole('button');

  expect(buttonAdicionar.length).toBe(2);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('O número renderizado na página deve ser o mesmo valor do estado global', () => {
  const initialState = {
    counterReducer: {
      count: 5,
    }
  }
  renderWithRedux(<App />, { initialState });

  expect(screen.queryByText('0')).not.toBeInTheDocument();
  expect(screen.getByText('5')).toBeInTheDocument();
});

test('Testa se os botões incrementam corretamente o contador', () => {
  renderWithRedux(<App />);
  const buttonAdicionar1 = screen.queryByText('Incrementa 1');
  const buttonAdicionar5 = screen.queryByText('Incrementa 5');
  const contador = screen.getByRole('heading', {level: 2});
  
  expect(contador.innerHTML).toBe('0');

  userEvent.click(buttonAdicionar1);
  expect(contador.innerHTML).toBe('1');

  userEvent.click(buttonAdicionar5);
  expect(contador.innerHTML).toBe('6')
});

test('Testa se os botões incrementam o valor correto, com o estado global com valor personalizado', () => {
  const initialState = {
    counterReducer: {
      count: 5,
    }
  }

  renderWithRedux(<App />, { initialState });

  const buttonAdicionar1 = screen.queryByText('Incrementa 1');
  const buttonAdicionar5 = screen.queryByText('Incrementa 5');
  const contador = screen.getByRole('heading', {level: 2});
  
  expect(contador.innerHTML).toBe('5');

  userEvent.click(buttonAdicionar1);
  expect(contador.innerHTML).toBe('6');

  userEvent.click(buttonAdicionar5);
  expect(contador.innerHTML).toBe('11')
})

test('Incrementa o valor da store ao clicar no botão', () => {
  const { store } = renderWithRedux(<App />);

  expect(screen.getByText('0')).toBeInTheDocument();
  expect(store.getState().counterReducer.count).toBe(0);

  const button = screen.getByText('Incrementa 1');
  userEvent.click(button);

  expect(screen.getByText('1')).toBeInTheDocument();
  expect(store.getState().counterReducer.count).toBe(1);
});