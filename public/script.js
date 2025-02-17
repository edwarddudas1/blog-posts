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

async function createPost(title, content) {
  try {
    const response = await fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title, content})
    });
    console.log(response, 'response')

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    const newPost = response.json()
    postsArray.push(newPost)
    renderPosts(postsArray)

  } catch (error) {
    console.log(error);
  }
}

//   // Оновлення поста
//   async function updatePost(id, title, content) {
//     try {
//            } catch (error) {
//       console.error(error);
//     }
//   }

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
  document.getElementById('createPostForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('titleInput').value;
    const content = document.getElementById('contentInput').value;
    createPost(title, content);
  });

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
