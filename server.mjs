import express from "express";
const app = express()
const port = 3000;

app.get('/',(res,req) => {
   res.send('hello')
    console.log('jfjdjfk')
})

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
