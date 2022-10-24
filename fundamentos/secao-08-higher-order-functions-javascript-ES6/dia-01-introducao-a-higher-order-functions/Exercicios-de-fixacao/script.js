const string1 = () => 'Acordando!!';

const string2 = () => 'Bora tomar café!!';

const string3 = () => 'Partiu dormir!!';

const doingThings = (func) => {
  const retorno = func();
  console.log(retorno);
}

doingThings(string1);
doingThings(string2);
doingThings(string3);