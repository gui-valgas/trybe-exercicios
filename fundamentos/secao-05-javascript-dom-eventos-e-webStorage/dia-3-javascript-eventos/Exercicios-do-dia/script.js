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
    } else if (dia === 4 || dia === 11 || dia === 18) {
      itemDia.className = 'day friday';
    } else if (dia === 25) {
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

  botao.addEventListener('click', () => {
    for (let index = 0; index < feriados.length; index += 1) {
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

function criaSextou(string) {
  let botaoSexta = document.createElement('button');
  botaoSexta.id = 'btn-friday';
  botaoSexta.innerHTML = string;
  let buttonsContainer = document.querySelector('.buttons-container');

  buttonsContainer.appendChild(botaoSexta)

  //Parte 5
  let fridaysList = document.querySelectorAll('.friday')
  let sextaFeiras = [4, 11, 18, 25]
  botaoSexta.addEventListener('click', () => {
    for (let index = 0; index < fridaysList.length; index += 1) {
      if (fridaysList[index].innerText != 'SEXTOU!') {
        fridaysList[index].innerText = 'SEXTOU!';
      } else {
        fridaysList[index].innerText = sextaFeiras[index]
      }
    }
  })
}
criaSextou('Sexta-feira');

//Parte 6

function zoomMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', (event) => {
    const element = event.target;
    element.style.fontSize = '30px';
    element.style.fontWeight = '600'
  })
}
zoomMouseOver()

function zoomMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', (event) => {
    const element = event.target;
    element.style.fontSize = '20px'
    element.style.fontWeight = '200'
  })
}
zoomMouseOut();

//Parte 7

function newTask(task) {
  let taskList = document.querySelector('.my-tasks');
  let newTasks = document.createElement('span');
  newTasks.id = 'tarefa1'

  newTasks.innerHTML = task;
  taskList.appendChild(newTasks);
}
newTask('Finalizar projeto Pixel-Art!')

//Parte 8

function addTaskSubtitles(color) {
  const taskList = document.querySelector('.my-tasks')
  const subtitle = document.createElement('div')
  subtitle.classList.add('task');
  subtitle.style.backgroundColor = color;

  taskList.appendChild(subtitle);


}
addTaskSubtitles('red')

//Parte 9

function selectTask() {
  const getTask = document.querySelector('.task');

  getTask.addEventListener('click', (event) => {
    const element = event.target;
    if (element.className === 'task') {
      element.classList.add('selected')
    } else {
      element.className = 'task'
    }

  })
}
selectTask();

// Parte 10 

function tagDay() {
  let days = document.querySelector('#days')
  let selectedTask = document.getElementsByClassName('task selected');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;


  days.addEventListener('click', (event) => {
    element = event.target;
    let targetColor = element.style.color;
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      element.style.color = color
    } else if (targetColor === taskDiv.style.backgroundColor) {
      element.style.color = 'rgb(119,119,119'
    }

  })
}
tagDay()

//BONUS

function addNewCommits() {
  let taskList = document.querySelector('.task-list')
  let getInput = document.querySelector('#task-input');
  let inputButton = document.querySelector('#btn-add');

  inputButton.addEventListener('click', () => {
    if(getInput.value.length > 0) {
      let li = document.createElement('li');
      li.innerText = getInput.value;

      taskList.appendChild(li)
      getInput.value = '';
    } else {
      alert('Error: nenhum novo compromisso!')
    }
  })
  getInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && getInput.value.length > 0) {
      let li = document.createElement('li');
      li.innerText = getInput.value;

      taskList.appendChild(li);
      getInput.value = '';
    }
  })
}
addNewCommits();