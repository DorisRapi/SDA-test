const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs')

let app = express()
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test/t', (request, response) => {
    response.sendFile(__dirname + "/inddex.html")
})
app.get('/', (request, response) => {
    response.sendFile(__dirname + "/welcome.html")
})

app.get('/users', (request, response) => {
 let data = fs.readFileSync('users.txt');
 console.log(data);
 response.send(data)
})


app.post("/post-form", (request, response) => {
   console.log(JSON.stringify(request.body))
    fs.writeFileSync("users.txt", JSON.stringify(request.body))
    response.sendFile(__dirname + "/home.html")
})
app.listen(PORT)
console.log(__dirname + "/inddex.html")