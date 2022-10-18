const substituaX = (nome) => {
  const frase = 'Tryber x aqui';

  arrayFrase = frase.split(' ');
  for (let index = 0; index < arrayFrase.length; index += 1) {
    if (arrayFrase[index] === 'x') {
      arrayFrase[index] = nome
    }
  }
  const resultado = arrayFrase.join(' ')
  return resultado;
}

const minhasSkills = (funct) => {
  const skills = ['JAVASCRIPT', 'CSS', 'HTML'];
  let nomeESkills = `${funct}
Minhas três principais habilidades são: `
  for (let index = 0; index < skills.length; index += 1) {
    nomeESkills = `${nomeESkills} 
    - ${skills[index]}`;
  }
  return nomeESkills;
}
console.log(minhasSkills(substituaX('Guilherme')));