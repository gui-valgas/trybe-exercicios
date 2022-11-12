import './styles.css'

const dogBtn = document.querySelector('#dogBtn');
const catBtn = document.querySelector('#catBtn');
const surpriseBtn = document.querySelector('#surprise');
const img = document.querySelector('#image')

dogBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const dogUrl = 'https://dog.ceo/api/breeds/image/random'
  fetch(dogUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      img.src = data.message
    })
})

catBtn.addEventListener('click', () => {
  const catUrl = 'https://aws.random.cat/meow'
  fetch(catUrl)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.file
    })
})

surpriseBtn.addEventListener('click', () => {
  const dogUrl = 'https://dog.ceo/api/breeds/image/random';
  const catUrl = 'https://aws.random.cat/meow';

  Promise.any([
    fetch(dogUrl),
    fetch(catUrl),
  ])
    .then((response) => response.json())
    .then((data) => {
      img.src = data.file || data.message
    })
});
