// create web server- http Module[URL ROUTING AND SERVING HTML PAGES]
import http from 'http';
import fs from 'fs';
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
res.writeHead(202, "Good", {'Content-Type' :'text/html'});

// if(req.url === '/'){
// res.end("<h1>Home Page</h1>");
// }
// else if(req.url === '/about'){
// res.end("<h1>About Page</h1>");
// } else {
//     res.end("<h1>404 page not found</h1>");
// }
// });



if(req.url === '/'){
    fs.readFile('./public/home.html', (error,data)=>{
        if (error) throw error;
        res.end(data);
    })
    
    }
    else if(req.url === '/about'){
        fs.readFile('./public/about.html', (error,data)=>{
            if (error) throw error;
            res.end(data);
        })
    } else {
        res.end("<h1>404 page not found</h1>");
    }
    });

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST , ()=>{
    console.log('server running at http://localhost:8000');
});