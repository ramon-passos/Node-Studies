const http = require('http');

const { hostname } = require('os');
const port = 3000;

const server = http.createServer((req, res) => {
    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/plan');
    res.end('Hello World!!!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

