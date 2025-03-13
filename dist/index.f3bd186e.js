let postsArray = [];
let template;
// Отримання списку постів
async function getPosts() {
    try {
        const response = await fetch("http://localhost:3000/posts");
        console.log("Response status:", response.status);
        if (!response.ok) throw new Error("Network Error Response Identified");
        const data = await response.json();
        console.log("Fetched data:", data);
        postsArray = data;
    } catch (error) {
        console.error("Error fetching or processing data", error);
    }
}
async function createPost(title, content) {
    try {
        const response = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content
            })
        });
        console.log(response, "response");
        if (!response.ok) throw new Error("Failed to create post");
        const newPost = await response.json();
        postsArray.push(newPost);
        console.log("Rendering posts with data:", postsArray);
        renderPosts(postsArray);
    } catch (error) {
        console.log(error);
    }
}
// Оновлення поста
const updatePost = async (id, title, content)=>{
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content
            })
        });
        if (!response.ok) throw new Error("Failed to update post");
        const updatedPost = await response.json();
        console.log("Updated post:", updatedPost);
        // Optionally, update the postsArray locally to reflect the updated post
        postsArray = postsArray.map((post)=>post.id === id ? {
                ...post,
                title,
                content
            } : post);
        renderPosts(postsArray); // Re-render the updated posts list
    } catch (error) {
        console.error("Error updating post:", error);
    }
};
// Видалення поста
async function deletePost(id) {
    try {
        // Send DELETE request to the server
        const response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("deletePost response:", response);
        if (!response.ok) throw new Error("Failed to delete the post");
        // Remove the post from the local posts array after successful deletion
        postsArray = postsArray.filter((post)=>post.id !== Number(id));
        renderPosts(postsArray); // Re-render the posts list to reflect the change
    } catch (error) {
        console.error("Error deleting post", error);
    }
}
// Додавання коментаря до поста
async function createComment(postId, commentText) {
    console.log("\uD83D\uDEA8 Debugging createComment | postId:", postId, "Comment:", commentText);
    if (!postId || postId < 1) {
        console.error("\u274C Invalid post ID:", postId);
        return;
    }
    try {
        const response = await fetch(`http://localhost:3000/posts/${postId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: commentText
            })
        });
        if (!response.ok) throw new Error(`Failed to create comment. Server responded with status ${response.status}`);
        const result = await response.json();
        console.log("\u2705 Comment added:", result);
        postsArray = postsArray.map((post)=>post.id === postId ? {
                ...post,
                comments: [
                    ...post.comments || [],
                    result.comment
                ]
            } : post);
        renderPosts(postsArray);
    } catch (error) {
        console.error("\u274C Error creating comment:", error);
    }
}
// Оновлення відображення постів на сторінці
function renderPosts(posts) {
    const menuContainer = document.querySelector(".menuContainer");
    if (!template) return console.log("Template not found");
    const postTemplate = template({
        posts
    });
    menuContainer.innerHTML = postTemplate;
}
// Обробник події для створення поста
document.getElementById("createPostForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    const title = document.getElementById("titleInput").value;
    const content = document.getElementById("contentInput").value;
    createPost(title, content);
    document.getElementById("titleInput").value = "";
    document.getElementById("contentInput").value = "";
});
// Обробник події для редагування поста
//   document.addEventListener('click', cb);
// Оновлення поста
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("editPostButton")) {
        const findId = event.target.getAttribute("data-id");
        const newTitle = prompt("Enter new title:");
        const newText = prompt("Enter new content:");
        if (newTitle && newText) {
            console.log(`Updating post with ID: ${findId}`);
            updatePost(Number(findId), newTitle, newText);
        }
    }
});
// Обробник події для видалення поста
document.addEventListener("click", (event)=>{
    if (event.target.classList.contains("deletePostButton")) {
        const id = event.target.getAttribute("data-id");
        if (id) {
            console.log("Delete button clicked for post ID:", id);
            deletePost(id);
        } else console.error("No valid post ID found for delete operation.");
    }
});
// Обробник події для додавання коментаря
document.addEventListener("submit", (event)=>{
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
    const source = sourceElement.innerHTML || sourceElement.content.firstElementChild.innerHTML;
    if (!source.trim()) {
        console.error("Template source is empty");
        return;
    }
    template = Handlebars.compile(source); // Move this here so template is available globally
    renderPosts(postsArray); // No need to call renderPosts again in startApp
}
startApp();

//# sourceMappingURL=index.f3bd186e.js.map
