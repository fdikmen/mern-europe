const express = require('express')
const app = express()
const port = 3001

app.set('view engine','pug')

const isAuth=require('./helpers/isAuth')
app.use("/about",isAuth)

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


// app.use((err,req,res,next)=>{
//     res.status(err.status);
//     res.render('error',{statusCode:err.status,messageText:err.message});
// });

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(err.status)//.send(err.message)
  res.render('error',{status:err.status,message:err.message});
});


app.listen(port, () => console.log(`Example app listening on port port!`))