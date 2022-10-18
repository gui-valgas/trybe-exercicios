const contagemClicks = () => {
  
  
  const botao = document.querySelector('#botao');
  const numberClicks = document.querySelector('#number-clicks');
  const botaoReset = document.querySelector('#reset')
  let clickCount = 0;
  
  botao.addEventListener('click', () => {
    clickCount += 1
    numberClicks.innerHTML = clickCount
  })

  botaoReset.addEventListener('click', () => {
    clickCount = 0
    numberClicks.innerHTML = 0
  
  })
}
contagemClicks()
