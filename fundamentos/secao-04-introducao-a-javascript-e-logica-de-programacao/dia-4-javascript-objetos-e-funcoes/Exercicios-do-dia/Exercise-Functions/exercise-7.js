function checkString(palavra, final) {

let check = true;

for (let index = 0; index < final.length; index +=1) {
  if (final[final.length - index] != palavra[palavra.length - index]) {
    check = false;
  }
}

return check;
}

let string1 = 'trybe';
let string2 = 'be';
console.log(checkString(string1, string2))