const express = require('express')
const app = express();

app.get('/hello',(req,res)=>
{
    res.send('Hello Express!!!')
})


app.listen(3000,()=>{
    console.log("123...")
})