const http = require('http')
//callback
const myServer = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    response.write("<i>My response: </i><b>Hello World!!! ÇŞĞ</b><br/>");
    response.write("New messages<br/>");
    response.end("<i>My response end method: </i><b>Hello World!!! ÇŞĞ</b>");
});

myServer.listen(3000)

