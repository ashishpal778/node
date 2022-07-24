const http = require('http')
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'applicaton\json'});
resp.write(JSON.stringify({name:'ashish babu pal',email:'ashishpal778@gmail.com'}));
resp.end();
}).listen(4000)