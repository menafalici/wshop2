// Här ska vi definiera vår server! Men vi ska inte starta den
// (alltså app.listen(port, ()=>{}), har vi inte i denna fil, utan i index.js)
const express = require('express')
const app = express()
const port = 8080

// define a static folder, 'public'
app.use('/public', express.static('public'))

// Route till /
app.get('/', (req, res) => {
    const enGrej = 'Hallå en grej'
    res.status(200).render('gallery', { enGrej })
})



module.exports = { app, port }