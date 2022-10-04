window.onload = function () {
  function changeBackground() {
    let listaBotoes = document.querySelectorAll('#background-color > button')


    for (let index = 0; index < listaBotoes.length; index += 1) {
      listaBotoes[index].addEventListener('click', function (event) {
        let containerTexto = document.querySelector('.container')
        containerTexto.style.backgroundColor = event.target.innerText

        // if (event.target.innerText === 'black') {
        //   containerTexto.style.color = 'white'
        // } else {
        //   containerTexto.style.color = 'black'
        // }
        localStorage.setItem('background-color', event.target.innerText)
      })
    }
  }
  changeBackground()



  function textColorChange() {
    let textColorContainer = document.querySelectorAll('#font-color > button')

    for (let index = 0; index < textColorContainer.length; index += 1) {
      textColorContainer[index].addEventListener('click', function (event) {
        let colorText = document.querySelector('#texto')
        colorText.style.color = event.target.innerText

        localStorage.setItem('font-color', event.target.innerText)
      })
    }
  }
  textColorChange()


  function setFontSize(size) {
    let paragraphs = document.querySelectorAll("#texto")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size
    }
    localStorage.setItem("fontSize", size)
  }
  let fontSizeButtons = document.querySelectorAll("#font-size>button")
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", function (event) {
      setFontSize(event.target.innerHTML)
    })
  }
  setFontSize()

  //   let containerTexto = document.querySelectorAll('#font-size > button')
  //   for (let index = 0; index < containerTexto.length; index += 1) {
  //     containerTexto[index].addEventListener('click', function (event) {
  //       let spanContainer = document.querySelector('#texto')
  //       let span = spanContainer.innerHTML
  //       if (event.target.id === '#fonte1' ) {
  //         span.style.fontSize = 8 + 'px'
  //       }
  //     })
  //   }
  // }


}


function webStorage() {
  let backgroundColor = localStorage.getItem('background-color')
  let containerTexto = document.querySelector('.container')
  containerTexto.style.backgroundColor = backgroundColor


  let colorText = localStorage.getItem('font-color')
  let texto = document.querySelector('#texto')
  texto.style.color = colorText

  // if (backgroundColor === 'black') {
  //   containerTexto.style.color = 'white'
  // } else {
  //   containerTexto.style.color = 'black'
  // }

  let fontSize = localStorage.getItem("fontSize")
  if (fontSize) setFontSize(fontSize)

}

webStorage()