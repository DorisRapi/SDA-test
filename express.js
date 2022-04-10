const express = require("express")

let app = express()
const PORT = 3000;

app.get('/test/t', (request, response) => {
    response.send("Hello World")
})
app.listen(PORT)