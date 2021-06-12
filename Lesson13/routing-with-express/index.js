const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
//? -> Optional
app.get('/Co(nt)?act', (req, res) => res.send('Contact Page!!!'))
app.get('/Co?ntac?t2', (req, res) => res.send('Contact Page 2!!!'))

//* -> ANY TEXT
app.get('/Con*tact3', (req, res) => res.send('Contact Page 3!!!'))
//+ PLUS
app.get('/Contac+t4', (req, res) => res.send('Contact Page 4!!!'))

app.get('/C+on*tac?t5', (req, res) => res.send('Contact Page 5!!!'))

//EXPRESS METHODS
app
  .get("/about", (req, res) => {
    res.send("GET request to the homepage From GET METHOD!");
  })
  .post("/about", (req, res) => {
    res.send("POST request to the homepage From POST METHOD!");
  })
  .delete("/about", (req, res) => {
    res.send("DELETE request to the homepage From DELETE METHOD!");
  })
  .put("/about", (req, res) => {
    res.send("PUT request to the homepage From PUT METHOD!");
  });
//ALL METHODS
app.all('/info', (req, res) => {
  res.send('ALL request to the INFO page')
})
//SEND PARAMTERS
app.get('/user/:id', (req, res) => { 
     res.send('GET request to the USER:' + req.params.id)})

     app.get('/books/:bookId', (req, res) => {
       res.send(req.params.bookId)
     })
//MULTI PARAMS
app.get('/post/:postId/:userId?', (req, res) => {
  res.send(req.params)
})


app.listen(port, () => console.log(`Example app listening on port port!`))