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
//   async function updatePost(id, title, content) {
//     try {
//            } catch (error) {
//       console.error(error);
//     }
//   }

// Видалення поста
async function deletePost(id) {
  try {
    const response = await fetch(`/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (!response.ok) {
      throw new Error("Network Error Response Identified");
    }
    
    console.log("Post deleted successfully");

    const deletePost = await response.json();
    
  } catch (error) {
    console.error("Error deleting post", error);
  }
}

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
