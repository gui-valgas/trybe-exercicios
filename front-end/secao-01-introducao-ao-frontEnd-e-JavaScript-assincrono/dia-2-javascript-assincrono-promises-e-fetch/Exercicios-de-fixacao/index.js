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
    return response.json()
  })
  .then((data) => {
    const users = data.users;

    // Chama a função auxiliar para preencher os nomes e ids no select users-select
    fillUsersSelect(users);

  });
usersSelect.addEventListener('change', () => {
  clearPageData();

  const posts = fetch(`https://dummyjson.com/posts/user/${usersSelect.value}`)
    .then((response) => response.json())
    .then((data) => {
      const postDestacado = data.posts[0]
      fillPosts(data.posts)

      const commentsAPI = `https://dummyjson.com/posts/${postDestacado.id}/comments`

      return fetch(commentsAPI)
    }).then((response) => response.json())
    .then((data) => {
      const comments = data.comments
      fillFeaturedPostComments(comments)
    })
    .catch((error) => {
      fillErrorMessage('Error ao recuperar posts e comentários');
    })
});
