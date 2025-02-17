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
      body: JSON.stringify({ title, content }),
    });
    console.log(response, "response");

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    const newPost = response.json();
    postsArray.push(newPost);
    renderPosts(postsArray);
  } catch (error) {
    console.log(error);
  }
}

//   // Оновлення поста
async function updatePost(id, newTitle, newContent) {
  try {
    const response = await fetch(`/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle, content: newContent }),
    });
    console.log("updatePost");
    if (!response.ok) {
      throw new Error("Network Error Response Identified");
    }
    const updatedPost = await response.json();
    console.log("Updated post:", updatedPost);
  } catch (error) {
    console.error(error);
  }
}

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
document.getElementById("createPostForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("titleInput").value;
  const content = document.getElementById("contentInput").value;
  createPost(title, content);
});

// Обробник події для редагування поста
//   document.addEventListener('click', cb);

// Оновлення поста

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("editPostButton")) {
    const findId = event.target.getAttribute("data-id");
    const newTitle = prompt("Введіть новий заголовок:");
    const newText = prompt("Введіть новий текст поста:");
    if (newTitle && newText) {
      updatePost(findId, newTitle, newText);
    }
  }
});

// Обробник події для видалення поста
//   document.addEventListener('click', cb);
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("deletePostButton")) {
    console.log("Delete button clicked"); // Debugging log
    const id = event.target.getAttribute("data-id");
    deletePost(id);
  }
});

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
