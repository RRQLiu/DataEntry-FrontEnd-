const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
//const unirest = require("unirest");


app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} .`);
});