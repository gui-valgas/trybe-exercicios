const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(arrayNames, arrayNumbers) {

  const ObjStudent = arrayNames.map((element, index) => (
    {
      name: element,
      average: arrayNumbers[index].reduce((acc, curr) => acc + curr, 0) / arrayNumbers[index].length
    }
  ));
  return ObjStudent;
}    

console.log(studentAverage(students, grades))
