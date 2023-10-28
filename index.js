const http = require('http')

const data = {age:23};

const server = http.createServer((req, res)=>{
    console.log("Server Started");
    res.setHeader('Dummy','Dummyvalue');
    // res.setHeader('Content-Type','application/json');
    // res.setHeader('Content-Type','text/html');

    res.end('<h1>Hello</h1>');
    // res.end(JSON.stringify(data));
})

server.listen(8080);