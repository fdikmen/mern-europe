const express = require('express')
const app=express()
const port=3000

app.set('view engine','pug')

app.get('/',(req,res)=>res.send("Hello world from express."))

app.get('/hello',(req,res)=>res.render('index'))

app.listen(port)