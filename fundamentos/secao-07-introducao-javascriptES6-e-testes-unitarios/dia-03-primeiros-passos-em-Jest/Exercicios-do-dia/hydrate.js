const hydrate = (string) => {
 let stringSplit = string.split(' ');

 let drinks = 0;

 for (let index = 0; index < stringSplit.length; index += 1) {
  let parsedNum = parseInt(stringSplit[index])
  if (parsedNum) {
    drinks = drinks + parsedNum 
  }
 }

 if (drinks === 1) {
  drinks = `${drinks} copo de água`;
 } else {
  drinks = `${drinks} copos de água`;
 }

 return drinks
}

module.exports = hydrate;