const express = require('express');
const generateToken = require('./utils/generateToken');


const app = express();

app.use(express.json());

const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateDescription = require('./middlewares/validateDescription');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');
const auth = require('./middlewares/auth');

app.post('/activities',
  auth,
  validateDescription,
  validateName,
  validatePrice,
  validateDifficulty,
  validateCreatedAt,
  validateRating,
  (_req, res) => {
  res.status(201).json({ message: 'Atividade registrada com sucesso!' });
})

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([ email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json(
      { message: 'Campos ausentes!' },
    )
  }

  const token = generateToken();

  return res.status(200). json({ token });
});

module.exports = app;