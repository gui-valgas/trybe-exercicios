import Swal from 'sweetalert2'

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

buttonEl.addEventListener('click', handleClick);

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    preEl.innerHTML = JSON.stringify(data) // Retorna CEP, logradouro, complemento, bairro, localidade, uf, ibge, ddd e siafi.
    return data;
  } catch (error) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops..',
      text: 'Insira um cep válido!'
    })
  }
}

