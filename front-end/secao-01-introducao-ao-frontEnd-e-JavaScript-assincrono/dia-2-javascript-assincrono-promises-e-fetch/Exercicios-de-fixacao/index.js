import './style.css';


import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
fetch(USERS_API)
  .then((response) => {
    console.log(response)
      return response.json()
  })
  .then((data) => {
    console.log(data)
    const { users } = data;
    console.log(users)

    // Chama a função auxiliar para preencher os nomes e ids no select users-select
    fillUsersSelect(users);
  });
usersSelect.addEventListener('change', () => {
  clearPageData();

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
