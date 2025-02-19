import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Get all posts
app.get("/posts", (req, res) => {
  fs.readFile(path.join(__dirname, "public", "bd.json"), "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error reading file");
    }
    const bd = JSON.parse(data);
    res.status(200).json(bd.posts);
  });
});

// Get a single post by ID
app.get("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  fs.readFile(path.join(__dirname, "public", "bd.json"), "utf8", (err, data) => {
    if (err) {
      console.error("Error reading database file:", err);
      return res.status(500).send("Error reading database file");
    }
    const bd = JSON.parse(data);
    const post = bd.posts.find((p) => p.id === postId);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.status(200).json(post);
  });
});

// Create a new post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).send({ error: "Title and content are required" });
  }

  fs.readFile(path.join(__dirname, "public", "bd.json"), "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error reading file");
    }

    const db = JSON.parse(data);
    const newPost = {
      id: db.posts.length > 0 ? db.posts[db.posts.length - 1].id + 1 : 1,
      title,
      content,
      comments: [], 
    };
    
    db.posts.push(newPost);

    fs.writeFile(path.join(__dirname, "public", "bd.json"), JSON.stringify(db, null, 2), "utf8", (error) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Error writing file");
      }
      res.status(201).json(newPost);
    });
  });
});

// Add a comment to a post
app.post("/posts/:id/comments", (req, res) => {
  const postId = Number(req.params.id);

  if (isNaN(postId) || postId < 1) {
    return res.status(400).send({ error: "Invalid post ID" });
  }

  const newComment = req.body.content;
  if (!newComment || typeof newComment !== "string") {
    return res.status(400).send({ error: "Invalid comment" });
  }

  fs.readFile(path.join(__dirname, "public", "bd.json"), "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error reading file");
    }
    const db = JSON.parse(data);
    const post = db.posts.find((p) => p.id === postId);

    if (!post) {
      return res.status(404).send({ error: "Post not found" });
    }

    post.comments.push(newComment);

    fs.writeFile(path.join(__dirname, "public", "bd.json"), JSON.stringify(db, null, 2), "utf8", (error) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Error writing file");
      }
      res.status(201).json({ message: "Comment added", comment: newComment });
    });
  });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
