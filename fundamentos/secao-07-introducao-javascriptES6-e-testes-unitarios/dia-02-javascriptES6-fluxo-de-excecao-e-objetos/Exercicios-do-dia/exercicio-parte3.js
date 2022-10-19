const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//Crie uma função para adicionar o turno da noite na lesson2.
const adicionaChave = (object, key, value) => {
  object.key = value;
}
adicionaChave(lesson2, 'turno', 'noite');
console.log(lesson2);

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson1));

//Crie uma função para mostrar o tamanho de um objeto.
const objectSize = (object) => Object.keys(object).length;
console.log(objectSize(lesson1));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objectValues = (object) => Object.values(object);
console.log(objectValues(lesson1));

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

//Crie uma função que retorne o número total de estudantes em todas as aulas.
const numeroEstudantes = (object) => {
  
  const arrayKeys = Object.keys(object);
  let total = 0;

  for (let index = 0; index < arrayKeys.length; index += 1){
    const key = arrayKeys[index]
    total += object[key].numeroEstudantes
  }
  return total;
}
console.log(numeroEstudantes(allLessons))

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const valueNumber = (object, numero) => Object.values(object)[numero];
console.log(valueNumber(lesson2, 2));

// Crie uma função que verifique se o par (chave / valor) existe na função.
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verificaPar = (object, keyName, keyValue) => {
  const entries = Object.entries(object);
  let ePar = false;

  for (let index = 0; index < entries.length; index += 1) {
    if(entries[index][0] === keyName && entries[index][1] === keyValue) ePar = true;
  }
  return ePar;
}
console.log(verificaPar(lesson2,'professor','Carlos'));