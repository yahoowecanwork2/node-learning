const http = require('http');
http.createServer((req,resp)=>{
    resp.write("hey! this is Neha");
    resp.end()
}).listen(4500);