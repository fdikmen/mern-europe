const myexpress = require('express')
const myrouter = myexpress.Router();

myrouter.get('/about', (req, res) => res.send('Hello World! GET'))
myrouter.post('/about', (req, res) => res.send('Hello World! POST'))
myrouter.delete('/about', (req, res) => res.send('Hello World! DELETE'))
myrouter.put('/about', (req, res) => res.send('Hello World! PUT'))

module.exports = myrouter;