import express from "express";
const app = express()
const port = 3000;

app.get('/',(req,res) => {
  console.log('jfjdjfk')
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
