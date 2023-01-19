import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/RenderWithRouter';

describe('Testa a page Search.js', () => {
  afterEach(() => jest.clearAllMocks());

  it('Testa valor inserido na caixa de busca', () => {
    renderWithRouter(<App />);

    const input = screen.getByRole('textbox', { name: /Digimon/i });
    expect(input).toHaveValue('');

    userEvent.type(input, 'metal greymon');
    expect(input).toHaveValue('metal greymon');
  });

  it('Testa se na tela inicial nenhum digimon é renderizado', () => {
    renderWithRouter(<App />);

    const digimonH2 = screen.queryByTestId('digimonName');
    expect(digimonH2).not.toBeInTheDocument();
  });

  it('Testa se é possivel buscar um digimon', async () => {
    const mock = [{
      name: 'Agumon',
      level: 'Rookie',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    }];

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock),
    });

    renderWithRouter(<App />);
    const input = screen.getByRole('textbox', { name: /Digimon/i });
    userEvent.type(input, 'Agumon');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    const level = await screen.findByText('Level: Rookie');
    expect(level).toBeInTheDocument();

    const digimonName = await screen.findByText(/Agumon/i);
    expect(digimonName).toBeInTheDocument();

    const image = await screen.findByText('Agumon');
    expect(image).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Agumon',
    );
  });

  it('Testa se a mensagem de erro é renderizada', async () => {
    const ErrorMsg = 'geralt of rivia is not a Digimon in our database.';

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    }));

    renderWithRouter(<App />);

    const input = screen.getByRole('textbox', { name: /Digimon/i });
    userEvent.type(input, 'geralt of rivia');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    await screen.findByText('geralt of rivia is not a Digimon in our database.');

    expect(global.fetch).toBeCalledTimes(1);
  });

  it('Testa fetch em caso de input vazio', async () => {
    renderWithRouter(<App />);

    const input = screen.getByRole('textbox', { name: /Digimon/i });
    expect(input).toHaveValue('');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    expect(global.fetch).toBeCalledTimes(0);
  });

  it('Testa erro no servidor', async () => {
    jest.spyOn(global, 'fetch');
    await global.fetch.mockRejectedValue(
      new Error('erro no servidor'),
    );

    jest.spyOn(global.console, 'log');

    renderWithRouter(<App />);

    const input = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.type(input, 'Teste');
    userEvent.click(button);

    await waitFor(() => {
      expect(global.fetch).toBeCalledTimes(1);
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toBeCalledWith(
        'Erro ao fazer a requisição: Error: erro no servidor',
      );
    });
  });
});
