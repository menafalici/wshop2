// Här ska vi definiera vår server! Men vi ska inte starta den
// (alltså app.listen(port, ()=>{}), har vi inte i denna fil, utan i index.js)
const express = require('express')
const sassMiddleware = require('node-sass-middleware')
const path = require('path')
const app = express()
const port = 8080



// define what view engine to use, ejs in this case
app.set('view engine', 'ejs')

// Route till /
app.get('/', (req, res) => {
    const enGrej = 'Hallå en grej'
    res.status(200).render('gallery', { enGrej })
})

module.exports = { app, port, express }