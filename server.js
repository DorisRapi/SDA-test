const http = require('http');
const fs = require('fs');
const path = require('path');

let app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end("Hellooooo")
})

app.listen(3000, '127.0.0.1');
console.log("Server is Ready");