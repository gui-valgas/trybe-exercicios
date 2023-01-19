import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from './helpers/RenderWithRouter';

describe('Testa se a aplicação renderiza corretamente as rotas', () => {
  it('Aplicação é renderizada corretamente', () => {
    renderWithRouter(<App />);
    const title = screen.getByRole('heading', { name: 'Search Digimon', level: 1 });

    expect(title).toBeInTheDocument();

    const linkAbout = screen.getByRole('link', { name: 'About' });
    const linkSearch = screen.getByRole('link', { name: 'Search Digimon' });

    expect(linkAbout).toBeInTheDocument();
    expect(linkSearch).toBeInTheDocument();
  });

  it('Redireciona o usuário para rota correta ao clickar no link "About"', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: 'About' });

    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', { name: 'About' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Renderiza a page NotFound em caso de rota inexistente', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/pokemon');
    });

    const notFoundH1 = screen.getByRole('heading', { name: 'Page Not Found' });
    expect(notFoundH1).toBeInTheDocument();

    const textNotFound = screen.getByText(
      'A página que você está procurando não existe!',
    );
    expect(textNotFound).toBeInTheDocument();
  });
});
