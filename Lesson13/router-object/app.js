const express = require('express')
const app = express()
const port = 3001

// app.get('/about', (req, res) => res.send('Hello World!'))
// app.post('/about', (req, res) => res.send('Hello World!'))
// app.delete('/about', (req, res) => res.send('Hello World!'))
// app.put('/about', (req, res) => res.send('Hello World!'))

const aboutRoutes = require('./routes/about')
app.use('/api/',aboutRoutes)

const userRoutes = require('./routes/user')
app.use('/',userRoutes)

// app.get('/user', (req, res) => res.send('Hello World!'))
// app.post('/user', (req, res) => res.send('Hello World!'))
// app.delete('/user', (req, res) => res.send('Hello World!'))
// app.put('/user', (req, res) => res.send('Hello World!'))



app.listen(port, () => console.log(`Example app listening on port port!`))