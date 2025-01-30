import jsonData from './bd.json';

let postsArray = [];
  // Отримання списку постів
  async function getPosts() {
    try {
      postsArray = jsonData.posts;
      console.log(postsArray);
      
          } catch (error) {
      console.error(error);
    }
  }

// console.log(jsonData);

//   // Створення нового поста
//   async function createPost(title, content) {
//     try {
//           } catch (error) {
//       console.error(error);
//     }
//   }


//   // Оновлення поста
//   async function updatePost(id, title, content) {
//     try {
//            } catch (error) {
//       console.error(error);
//     }
//   }


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