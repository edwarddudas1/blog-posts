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

    const newPost = await response.json();
    postsArray.push(newPost);
    renderPosts(postsArray);
  } catch (error) {
    console.log(error);
  }
}

// Оновлення поста
async function updatePost(id, newTitle, newContent) {
  try {
    const response = await fetch(`/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle, content: newContent }),
    });

    if (!response.ok) {
      throw new Error("Failed to update post");
    }

    const updatedPost = await response.json();
    console.log("Updated post:", updatedPost);

    postsArray = postsArray.map((post) =>
      post.id === id ? updatedPost : post
    );
    renderPosts(postsArray);
  } catch (error) {
    console.error("Error updating post:", error);
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
    console.log("deletePost response:", response);

    if (!response.ok) {
      throw new Error("Network Error Response Identified");
    }

    postsArray = postsArray.filter((post) => post.id !== id);
    renderPosts(postsArray);
  } catch (error) {
    console.error("Error deleting post", error);
  }
}

// Додавання коментаря до поста
async function createComment(postId, commentText) {
  console.log("🚨 Debugging createComment | postId:", postId, "Comment:", commentText);

  if (!postId || postId < 1) {
    console.error("❌ Invalid post ID:", postId);
    return;
  }

  try {
    const response = await fetch(`/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: commentText }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create comment. Server responded with status ${response.status}`);
    }

    const result = await response.json();
    console.log("✅ Comment added:", result);

    postsArray = postsArray.map((post) =>
      post.id === postId
        ? { ...post, comments: [...(post.comments || []), result.comment] }
        : post
    );
    renderPosts(postsArray);
  } catch (error) {
    console.error("❌ Error creating comment:", error);
  }
}



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
      updatePost(Number(findId), newTitle, newText); 
    }
  }
});

// Обробник події для видалення поста
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("deletePostButton")) {
    console.log("Delete button clicked"); 
    const id = event.target.getAttribute("data-id");
    deletePost(id);
  }
});

// Обробник події для додавання коментаря
document.addEventListener("submit", (event) => {
  if (event.target.classList.contains("createCommentForm")) {
    event.preventDefault();

    const postId = Number(event.target.getAttribute("data-post-id"));
    const commentInput = event.target.querySelector(".commentInput");
    const commentText = commentInput.value.trim();

    if (!commentText) {
      console.error("Comment cannot be empty");
      return;
    }

    createComment(postId, commentText);
    commentInput.value = "";
  }
});

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
