// Här ska vi definiera vår server!
const express = require('express')
const app = express()
const port = 8080

// Route till /
app.get('/', (req, res) => res.send('Hello World!'))




module.exports = { app, port }