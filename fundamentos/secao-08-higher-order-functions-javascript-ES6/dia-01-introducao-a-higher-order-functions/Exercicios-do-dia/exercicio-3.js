// const corretor = (respostasCorretas, respostasFornecidas, callback) => {

// }
// const respCertas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const respEnviadas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const comparaRespostas = () => {

//   let pontuacao = 0;
//   for (let index1 = 0; index1 < respCertas.length; index1 += 1); {
//     for (let index2 = 0; index2 < respEnviadas.length; index2 += 1) {
//       if (respCertas[index] === respEnviadas[index]) {
//         pontuacao += 1;
//       } else {
//         pontuacao -= 0.5;
//       }
//     }
//   }
//   return pontuacao;
// }
// console.log(corretor(respCertas, respEnviadas, comparaRespostas))

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};
const countPoints = (rightAnswers, studentAnswers, callback) => {
  let counter = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const result = callback(rightAnswers[index], studentAnswers[index]);
    counter += result;
  }
  return `Resultado final: ${counter} pontos`;
};
console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
