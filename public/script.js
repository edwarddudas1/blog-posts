
import jsonData from './bd.json';
  // Отримання списку постів
  async function getPosts() {
    try {
          } catch (error) {
      console.error(error);
    }
  }

console.log(jsonData);
//   // Створення нового поста
//   async function createPost(title, content) {
//     try {
//           } catch (error) {
//       console.error(error);
//     }
//   }


//   // Оновлення поста
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".editPostButton").forEach(button => {
      button.addEventListener("click", function () {
          const post = this.closest(".post"); 
          const titleElement = post.querySelector("h2");
          const textElement = post.querySelector("p");
          const postId = this.getAttribute("data-id");
          const newTitle = prompt("Введіть новий заголовок:", titleElement.textContent);
          const newText = prompt("Введіть новий текст поста:", textElement.textContent);

          if (newTitle !== null) titleElement.textContent = newTitle;
          if (newText !== null) textElement.textContent = newText;

          console.log(`Пост із ID ${postId} оновлено:`, { newTitle, newText });
      });
  });
});

//   // Видалення поста
//   async function deletePost(id) {
//     try {
//            } catch (error) {
//       console.error(error);
//     }
//   }


//   // Додавання коментаря до поста
//   async function createComment(postId, comment) {
//     try {
           
//     } catch (error) {
//       console.error(error);
//     }
//   }


  // Оновлення відображення постів на сторінці
  function renderPosts(posts) {
      }


//   // Обробник події для створення поста
//   document.getElementById('createPostForm').addEventListener('submit', cb);


//   // Обробник події для редагування поста
//   document.addEventListener('click', cb);


//   // Обробник події для видалення поста
//   document.addEventListener('click', cb);


//   // Обробник події для додавання коментаря
//   document.addEventListener('submit', cb);


  // Запуск додатку
  async function startApp() {
    const posts = await getPosts();
    renderPosts(posts);
  }


  startApp();