const techList = (array, nome) => {
  if (array.length === 0 ) return 'Vazio!';

  const arrayOrdenado = array.sort();
  const arrayList = [];

  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    arrayList.push({
      tech: arrayOrdenado[index],
      name: nome,
    })
  }
  return arrayList
}

module.exports = techList;