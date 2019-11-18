const express = require('express')
const ctrl = require('./controllers/books_controller.js')

const app = express()

app.use(express.json())

app.get("/api/books", ctrl.read)
app.post("/api/books", ctrl.create)
app.put("/api/books/:id", ctrl.update)
app.delete("/api/books/:id", ctrl.delete)

const PORT = 4000
app.listen(PORT, () => 
{console.log(`${PORT} BOTTLES OF BEER ON THE WALL`)})