window.onload = function () {
  function changeBackground() {
    let listaBotoes = document.querySelectorAll('#background-color > button')
    console.log(listaBotoes)


    for (let index = 0; index < listaBotoes.length; index += 1) {
      listaBotoes[index].addEventListener('click', function (event) {
        let containerTexto = document.querySelector('.container')
        containerTexto.style.backgroundColor = event.target.innerText
        
        if (event.target.innerText === 'black') {
          containerTexto.style.color = 'white'
        } else {
          containerTexto.style.color = 'black'
        }
        localStorage.setItem('background-color', event.target.innerText)
      })
    }
  }
  changeBackground()
}





function webStorage () {
  let backgroundColor = localStorage.getItem('background-color')
  let containerTexto = document.querySelector('.container')
  containerTexto.style.backgroundColor = backgroundColor

  if (backgroundColor === 'black') {
    containerTexto.style.color = 'white'
  } else {
    containerTexto.style.color = 'black'
  }
}

webStorage()