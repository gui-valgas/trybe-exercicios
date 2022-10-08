window.onload = function () {

const clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click', clearFields);

const submitButton = document.querySelector('#botao-submit');
submitButton.addEventListener('click', handleSubmit)


  function handleSubmit(event) {
    event.preventDefault();
  }
};

function clearFields() {
  const form = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < form.length; index += 1) {
    const userInput = form[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}

