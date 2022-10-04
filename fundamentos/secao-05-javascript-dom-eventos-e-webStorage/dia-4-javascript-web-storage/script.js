window.onload = function () {

  //cor background
  function changeBackground() {
    let listaBotoes = document.querySelectorAll('#background-color > button')


    for (let index = 0; index < listaBotoes.length; index += 1) {
      listaBotoes[index].addEventListener('click', function (event) {
        let containerTexto = document.querySelector('.container')
        containerTexto.style.backgroundColor = event.target.innerText

        localStorage.setItem('background-color', event.target.innerText)
      })
    }
  }
  changeBackground()


  //cor do texto
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

  //tamanho da fonte

  function fonteTexto() {
    let containerTexto = document.querySelectorAll('#font-size > button')
    for (let index = 0; index < containerTexto.length; index += 1) {
      containerTexto[index].addEventListener('click', function (event) {
        let spanContainer = document.querySelector('#texto')
        spanContainer.style.fontSize = event.target.innerHTML

        localStorage.setItem('font-size', event.target.innerHTML)
      })

    }

  }
  fonteTexto()

  //espaçamento



  function setHeight() {
    let textoContainer = document.querySelectorAll('#line-height>button')

    for (let index = 0; index < textoContainer.length; index += 1) {
      textoContainer[index].addEventListener('click', function (event) {
        let texto = document.querySelector('#texto')
        texto.style.lineHeight = event.target.innerHTML

        localStorage.setItem('line-height', event.target.innerHTML)
      })
    }
  }
  setHeight()


  //tipo da fonte

  function setFontFamily () {
    let fontContainer = document.querySelectorAll('#font-family>button')

    for (let index = 0; index < fontContainer.length; index += 1) {
      fontContainer[index].addEventListener('click', function(event){
        let botaoFont = document.querySelector('#texto')
        botaoFont.style.fontFamily = event.target.innerHTML

        localStorage.setItem('font-family', event.target.innerHTML)
      })
    }
  }
setFontFamily()

  function webStorage() {
    let backgroundColor = localStorage.getItem('background-color')
    let containerTexto = document.querySelector('.container')
    containerTexto.style.backgroundColor = backgroundColor


    let colorText = localStorage.getItem('font-color')
    let texto = document.querySelector('#texto')
    texto.style.color = colorText

    let fontSize = localStorage.getItem('font-size')
    texto.style.fontSize = fontSize

    let lineHeight = localStorage.getItem('line-height')
    texto.style.lineHeight = lineHeight

    let fontFamily = localStorage.getItem('font-family')
    texto.style.fontFamily = fontFamily

  }

  webStorage();
}
