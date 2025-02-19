import http from 'http';

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('<h1>---- Ola Mundo ----</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server rodando em http://${hostname}:${port}/`);
})