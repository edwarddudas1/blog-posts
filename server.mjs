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
  console.log("jfjdjfk");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/posts", (req, res) => {
  fs.readFile(path.join(__dirname, "public", "bd.json"), (error, data) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error reading file");
      return;
    }
    const bd = JSON.parse(data);
    res.status(200).send(bd.posts);
  });
});

app.get("/posts/:id", (req, res) => {
  const postId = req.params.id;
  fs.readFile(path.join(__dirname, "public", "bd.json"), (err, data) => {
    if (err) {
      console.error("Error reading database file:", err);
      res.status(500).send("Error reading database file");
      return;
    }
    const bd = JSON.parse(data);
    const post = bd.posts.find((p) => p.id === postId);
    if (!post) {
      res.status(404).send("Post not found");
      return;
    }
    res.status(200).send(post);
  });
});

app.post("/posts", (req, res) => {
  const newPost = req.body;
  fs.readFile(path.join(__dirname, "public", "bd.json"), (error, data) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error reading file");
      return;
    }
    const jsonParseData = JSON.parse(data);
    jsonParseData.posts.push(newPost);

    fs.writeFile(
      path.join(__dirname, "public", "bd.json"),
      JSON.stringify(jsonParseData, null, 2),
      (error) => {
        if (error) {
          console.log(error);
          res.status(500).send("Error writing file");
          return;
        }
        res.status(201).send("Post is successfully created");
      }
    );
  });
});

app.put("/posts/:id", (req, res) => {
  const getId = req.params.id;
  const getUpdatedPostData = req.body;

  fs.readFile(
    path.join(__dirname, "public", "bd.json"),
    "utf8",
    (error, data) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error reading file");
        return;
      }
      const jsonParseData = JSON.parse(data);
      const checkIndex = jsonParseData.posts.findIndex(
        (post) => post.id === getId
      );
      if (checkIndex === -1) {
        res.status(404).send("Post not found");
        return;
      }

      jsonParseData.posts[checkIndex] = {
        ...jsonParseData.posts[checkIndex],
        ...getUpdatedPostData,
      };

      fs.writeFile(
        path.join(__dirname, "public", "bd.json"),
        JSON.stringify(jsonParseData, null, 2),
        "utf8",
        (error) => {
          if (error) {
            console.log(error);
            res.status(500).send("Error writing file");
            return;
          }
          res.status(200).send("Post is successfully updated");
        }
      );
    }
  );
});


app.post("/posts/:id/comments", (req, res) => {
  const postId = req.params.id;
  const newComment = req.body.content;

  fs.readFile(
    path.join(__dirname, "public", "bd.json"),
    "utf8",
    (error, data) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error reading file");
        return;
      }
      const jsonParseData = JSON.parse(data);
      const post = jsonParseData.posts.find((p) => p.id === postId);

      if (!post) {
        res.status(404).send({ error: "Post not found" });
        return;
      }
      post.comments.push(newComment);

      fs.writeFile(
        path.join(__dirname, "public", "bd.json"),
        JSON.stringify(jsonParseData, null, 2),
        "utf8",
        (error) => {
          if (error) {
            console.log(error);
            res.status(500).send("Error writing file");
            return;
          }
          res.status(201).send("Comment is successfully created");
        }
      );
    }
  );
});

app.delete("/posts/:id", (req, res) => {
  const getId = req.params.id;

  fs.readFile(
    path.join(__dirname, "public", "bd.json"),
    "utf8",
    (error, data) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error reading file");
        return;
      }
      const jsonGetData = JSON.parse(data);
      jsonGetData.posts = jsonGetData.posts.filter((post) => post.id != getId
      );

      fs.writeFile(
        path.join(__dirname, "public", "bd.json"),
        JSON.stringify(jsonGetData, null, 2),
        "utf8",
        (error) => {
          if (error) {
            console.log(error);
            res.status(500).send("Error writing file");
            return;
          }
          res.status(200).send("Post is deleted");
        }
      );
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});


