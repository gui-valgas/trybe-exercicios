function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();


//Parte 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criaDiasDoMes() {
  let listaDosDias = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dia = decemberDaysList[index];
    let itemDia = document.createElement('li');
    itemDia.innerHTML = dia;

    if (dia === 24 || dia === 31) {
      itemDia.className = 'day holiday';
    } else if ( dia === 4 || dia === 11 || dia === 18){
      itemDia.className = 'day friday';
    } else if ( dia === 25) {
      itemDia.className = 'day friday holiday';
    } 

    listaDosDias.appendChild(itemDia)
  }
}

criaDiasDoMes();

//Parte 2
function criaBotaoFeriados(string) {
  let novoBotao = document.createElement('button');
  novoBotao.id = 'btn-holiday'
  novoBotao.innerHTML = string
 
  let buttonsContainer = document.querySelector('.buttons-container');

  buttonsContainer.appendChild(novoBotao);
}
criaBotaoFeriados('feriados')

//Parte 3

function mostraFeriados() {
  let feriados = document.querySelectorAll('.holiday')
  let botao = document.querySelector('#btn-holiday')

  botao.addEventListener('click', function(){
    for (let index =0; index < feriados.length; index += 1) {
      if (feriados[index].style.backgroundColor === 'lightgreen') {
        feriados[index].style.backgroundColor = 'rgb(238,238,238)'
      } else {
        feriados[index].style.backgroundColor = 'lightgreen'
      }
    }
  })
}
mostraFeriados()

//Parte 4

function criaSextou (string) {
  let botaoSexta = document.createElement('button');
  botaoSexta.id = 'btn-friday';
  botaoSexta.innerHTML = string;
  let buttonsContainer = document.querySelector('.buttons-container');

  buttonsContainer.appendChild(botaoSexta)

//parte 5
let fridaysList = document.querySelectorAll('.friday')
console.log(fridaysList)
  botaoSexta.addEventListener('click', function(){
    for (let index = 0; index < fridaysList.length; index +=1) {
      

    }
  })
}
criaSextou('Sexta-feira');


