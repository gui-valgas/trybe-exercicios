// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it("Get a new joke when click the 'new joke' button", async () => {

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue({
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    }),
  });
  
  render(<App />);
  const btnNewJoke = screen.getByRole('button', { name: 'New joke' });
  expect(await screen.findByText('Whiteboards ... are remarkable.')).toBeInTheDocument();
  expect(screen.queryByText('What is red and smells like blue paint? Red paint!')).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue({
      id: 'xXSv492wPmb',
      joke: 'What is red and smells like blue paint? Red paint!',
      status: 200,
    }),
   });

   userEvent.click(btnNewJoke)
    expect(await screen.findByText('What is red and smells like blue paint? Red paint!')).toBeInTheDocument();
    expect(screen.queryByText('Whiteboards ... are remarkable.')).not.toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(2);
})