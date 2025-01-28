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

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
