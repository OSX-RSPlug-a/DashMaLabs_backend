const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const port = 3333;


app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(port, () => 
    console.log(`Enabled and web serv list on port ${port}!`))

app.use((req, res, next) => {
  next(console.error(404));
});

module.exports = server