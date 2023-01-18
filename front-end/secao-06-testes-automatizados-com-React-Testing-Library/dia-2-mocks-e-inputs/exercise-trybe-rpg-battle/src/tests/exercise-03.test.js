import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

jest.mock('../service/rollMultipleDice');

const enemy = {
  id: 1,
  name: 'Chapolin Colorado',
  source: 'Chaves',
  defensePoints: 30,
};

it('testa uma vitória na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValueOnce(35);
  const result = attackEnemy(2, 20, enemy);

  expect(result.success).toBe(true);
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});

it('testa uma derrota na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValueOnce(10);
  const result = attackEnemy(2, 20, enemy);

  expect(result.success).toBe(false);
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  rollMultipleDice.mockReturnValueOnce(30);
  const result = attackEnemy(2, 20, enemy);

  expect(result.success).toBe(false);
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});
