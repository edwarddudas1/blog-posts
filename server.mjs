import express from "express";
import fs from "fs";
import path from "path";
const app = express();
const port = 3000;


app.get('/',(req,res) => {
  console.log('jfjdjfk')
  res.send('hello')
})

app.get("/posts", (req, res) => {
fs.readFile(path)
})

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
