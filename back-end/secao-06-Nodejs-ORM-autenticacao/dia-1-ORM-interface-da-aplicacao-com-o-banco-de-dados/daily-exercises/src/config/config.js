const config = {
  username: 'root',
  password: 'senha_mysql',
  database: 'orm_example',
  host: 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};