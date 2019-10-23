const express = require('express');


const routes = express.Router();


//routes.post('/sessions', SessionController.store)

routes.get('/', (req, res) => res.send('Hello from the other side!'))


module.exports = routes