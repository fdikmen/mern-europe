//Created by node-snippet
const express = require('express')
const app=express()
const port=3000

//Enable PUG
app.set('view engine','pug')

app.get('/',(req,res)=>res.send("Hello world from express."))

app.get('/hello',(req,res)=>res.render('index.pug',
                            {name:"Priscilla",phone:"1-482-255-4328 x631"}))

app.listen(port)