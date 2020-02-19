// Här ska vi definiera vår server! Men vi ska inte starta den
// (alltså app.listen(port, ()=>{}), har vi inte i denna fil, utan i index.js)
const express = require('express')

const app = express()
const port = 8080

// Route till /
app.get('/', (req, res) => res.send('Hello World!'))




module.exports = { app, port }