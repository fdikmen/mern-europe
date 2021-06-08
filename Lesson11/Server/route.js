const http = require('http')

const server = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    if (request.method === 'GET') {
        if (request.url === '/') {
            
    response.write("Request URL : " + request.url)
        }
        else if (request.url === '/about') {
            response.write("Here about page...");
        }
        else {
            response.write("404 Not Found...");
        }
    }
    response.end("Request URL : " + request.url);
});

server.listen("3010")