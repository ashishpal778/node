// http module are use for accepet and send response
const http = require('http');
http.createServer((req, resp) => {
    resp.write("Hello this is ashish  pal");
    resp.end()
}).listen(1200)