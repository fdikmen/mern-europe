const http = require('http')
const fs = require('fs');
const myServer = http.createServer((req,res)=>
{
    console.log("There is a request from :",req.url);
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    fs.readFile('result.html',(err,data)=>{
        if (err) {
            throw err;
        }
        res.end(data);
    })
});
var myPort = 8000;
myServer.listen(myPort);