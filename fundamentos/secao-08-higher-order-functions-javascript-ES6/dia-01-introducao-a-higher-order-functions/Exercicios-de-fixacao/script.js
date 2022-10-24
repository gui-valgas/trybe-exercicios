const string1 = () => 'Acordando!!';

const string2 = () => 'Bora tomar café!!';

const string3 = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  return console.log(callback());
}

doingThings(string1);
doingThings(string2);
doingThings(string3);