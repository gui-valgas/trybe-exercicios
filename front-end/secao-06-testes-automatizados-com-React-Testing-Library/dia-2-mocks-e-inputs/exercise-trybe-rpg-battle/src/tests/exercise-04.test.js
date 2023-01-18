import { render, screen } from '@testing-library/react';
import App from '../App';

it('testa a requisção para a API', async () => {
  const char = [{
    id: 1,
    name: 'Geralt of Rivia',
    source: 'The witcher',
    defensePoints: 60,
  }];

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(char),
  });

  render(<App />);

  const element = await screen.findByRole('heading', { name: 'Geralt of Rivia' }, { level: 3 });
  expect(element).toBeInTheDocument();
});
