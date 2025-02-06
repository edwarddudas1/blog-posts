let postsArray = [];
let template;

// Отримання списку постів
async function getPosts() {
  try {
    const response = await fetch("/bd.json");
    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error("Network Error Response Identified");
    }

    const data = await response.json();
    console.log("Fetched data:", data);
    postsArray = data.posts;
  } catch (error) {
    console.error("Error fetching or processing data", error);
  }
}

// Створення нового поста
//   async function createPost(title, content) {
//     try {
//           } catch (error) {
//       console.error(error);
//     }
//   }

//   // Оновлення поста
  async function updatePost(id, title, content) {
    try {console.log('updatePost')
           } catch (error) {
      console.error(error);
    }
  }

// Видалення поста
//   async function deletePost(id) {
//     try {
//            } catch (error) {
//       console.error(error);
//     }
//   }

// Додавання коментаря до поста
//   async function createComment(postId, comment) {
//     try {

//     } catch (error) {
//       console.error(error);
//     }
//   }

// Оновлення відображення постів на сторінці

function renderPosts(posts) {
  const menuContainer = document.querySelector(".menuContainer");

  if (!template) {
    return console.log("Template not found");
  }
  const postTemplate = template({ posts });
  menuContainer.innerHTML = postTemplate;
}

// Обробник події для створення поста
//   document.getElementById('createPostForm').addEventListener('submit', cb);

// Обробник події для редагування поста
//   document.addEventListener('click', cb);
//   // Оновлення поста
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelectorAll(".editPostButton").forEach(button => {
//       button.addEventListener("click", function () {
//           const post = this.closest(".post"); 
//           const titleElement = post.querySelector("h2");
//           const textElement = post.querySelector("p");
//           const postId = this.getAttribute("data-id");
//           const newTitle = prompt("Введіть новий заголовок:", titleElement.textContent);
//           const newText = prompt("Введіть новий текст поста:", textElement.textContent);

//           if (newTitle !== null) titleElement.textContent = newTitle;
//           if (newText !== null) textElement.textContent = newText;

//           console.log(`Пост із ID ${postId} оновлено:`, { newTitle, newText });
//       });
//   });
// });
document.addEventListener("click", function (event) {
 if( event.target.classList.contains('editPostButton')){
const findId = event.target.getAttribute('data-id');  
const  newTitle = prompt('Введіть новий заголовок:');
const  newText = prompt('Введіть новий текст поста:');
if(newTitle && newText){
  updatePost(findId, newTitle, newText);
 }
}
});

// Обробник події для видалення поста
//   document.addEventListener('click', cb);

// Обробник події для додавання коментаря
//   document.addEventListener('submit', cb);

// Запуск додатку
async function startApp() {
  const posts = await getPosts();
  const sourceElement = document.querySelector(".menuTemplate");

  const source =
    sourceElement.innerHTML ||
    sourceElement.content.firstElementChild.innerHTML;
  if (!source.trim()) {
    console.error("Template source is empty");
    return;
  }

  const template = Handlebars.compile(source);
  const html = template({ posts: postsArray });

  document.querySelector(".menuContainer").innerHTML = html;
  renderPosts(postsArray);
}

startApp();
