// create web server- http Module
import http from 'http';

// const server = http.createServer((req, res)=>{
//     res.setHeader('Content- Type', 'text/plain');
// res.end('Response from server');
// });
// server.listen(8000, 'localhost', ()=>{
//     console.log('server running at http://localhost:8000');
// });


const server = http.createServer((req, res)=>{
    // request
// console.log(req.url);
if(req.url!= '/favicon.ico'){
    console.log(req.url);
}
console.log(req.method);

// Response
// res.statusCode= 202;
// res.statusMessage = "Good";
// res.setHeader('Content-Type', 'text/plain');
res.writeHead(202, "Good", {'Content-Type' :'text/plain'});
res.end('Response from server 1');
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST , ()=>{
    console.log('server running at http://localhost:8000');
});