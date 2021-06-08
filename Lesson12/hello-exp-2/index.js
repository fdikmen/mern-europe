// Created by [node-express] snippet
const express = require('express')
const app = express()
const port = 3005

app.set('view engine','pug')

app.use(express.static('public'))
app.use(express.static('public-2'))

app.get('/', (req, res) => res.render('home'))
app.listen(port, () => console.log(`Example app listening on port port!`))