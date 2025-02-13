import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  console.log("jfjdjfk");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/posts", (req, res) => {
  fs.readFile(path.join(__dirname, "public", "bd.json"), (error, data) => {
    if(error) {
      console.log(error);
      res.status(500).send("Error reading file");
      return;
    }
    const bd = JSON.parse(data);
    res.status(200).send(bd.posts);

  });
});

app.post('/posts', (req, res) => {
  const newPost = req.body
  fs.readFile(path.join(__dirname, "public", "bd.json"), (error, data) => {
    if(error) {
      console.log(error);
      res.status(500).send("Error reading file");
      return;
    }
    const jsonParseData = JSON.parse(data)
    jsonParseData.posts.push(newPost)

    fs.writeFile(path.join(__dirname, "public", "bd.json"), JSON.stringify(jsonParseData), (error) => {
      if(error) {
        console.log(error);
        res.status(500).send("Error writing file");
        return;
      }
      res.status(201).send('Post is successfully created')
    })
  })

})

app.put('/posts/:id',(req, res) => {
  const getId = req.params.id
  const getUpdatedPostData = req.body
  fs.readFile(path.join(__dirname, "public", "bd.json"), (error, data) => {
    if(error) {
      console.log(error);
      res.status(500).send("Error reading file");
      return;
    }
    const jsonParseData = JSON.parse(data)
    const checkIndex = jsonParseData.posts.findIndex((post) => post.id === getId)
    if(checkIndex === -1) {
      res.status(404).send('Post not found')
      return;
    }

    jsonParseData.posts[checkIndex] = {...jsonParseData.posts[checkIndex],...getUpdatedPostData}

    fs.writeFile(path.join(__dirname, "public", "bd.json"), JSON.stringify(jsonParseData), (error) => {
      if(error) {
        console.log(error);
        res.status(500).send("Error writing file");
        return;
      }
      res.status(201).send('Post is successfully created')
    })
  })
})






app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

