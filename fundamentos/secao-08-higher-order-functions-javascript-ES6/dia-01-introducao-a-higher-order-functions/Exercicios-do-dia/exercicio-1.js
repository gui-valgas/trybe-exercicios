const pessoaContratada = (nome) => {
  const email = nome.split(' ').join('_');
  return {
    name: nome,
    email: `${email}@trybe.com`
  };

};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('pedro guerra'),
    id2: callback('luiza drumond'),
    id3: callback('carla paiva'),
  };
  return employees;
};

console.log(newEmployees(pessoaContratada))