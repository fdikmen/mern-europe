const fs = require('fs')
const http = require('http')
const server = http.createServer()

server.on('request',(req,res)=>
{
    /*fs.readFile('bigData.csv',(err,data)=>{
        if(err) throw err;
        res.end(data);
    })*/

    const readStream = fs.createReadStream('bigData.csv');
    readStream.pipe(res);
})


server.listen(3000)