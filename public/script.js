
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
let posts = [
  { id: 1, title: "Перший пост", content: "Це зміст першого поста." },
  { id: 2, title: "Другий пост", content: "Це зміст другого поста." }
];
function updatePost(id, newTitle, newContent) {
  const post = posts.find(post => post.id === id);
  if (post) {
      post.title = newTitle;
      post.content = newContent;
      console.log("Пост оновлено:, post");
  } else {
      console.log("Пост не знайдено");
  }
}
function editPost(id) {
  const post = posts.find(post => post.id === id);
  if (!post) {
      console.log("Пост не знайдено");
      return;
  }


  const newTitle = prompt("Введіть новий заголовок:", post.title);
  const newContent = prompt("Введіть новий зміст:", post.content);

  if (newTitle && newContent) {
      updatePost(id, newTitle, newContent);
  }
}

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