const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Rahul!');
});

app.get('/rahul', (req, res) =>{
  res.send('Rahul/Linkedin.com')
});

app.get('/login', (req, res)=>{
  res.send("<h1>Please login at app.com</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

