// Här ska vi definiera vår server! Men vi ska inte starta den
// (alltså app.listen(port, ()=>{}), har vi inte i denna fil, utan i index.js)
const express = require('express')
const sassMiddleware = require('node-sass-middleware')
const app = express()
const port = 8080
const productItem = require('../model/product')

app.use(sassMiddleware({ // tell sassMiddleware where src file and dest directory is
    src: 'sass',
    dest: 'public',
    // debug: true, // för att skriva ut data till konsollen
    outputStyle: 'compressed'
}))
// define a static folder, 'public'
app.use(express.static('public'))
// 
app.use(express.urlencoded({ extended: true }));
// define what view engine to use, ejs in this case
app.set('view engine', 'ejs')




// ------------------  Routs  -------------------//
app.get('/gallery', (req, res) => {
    res.status(200).render('gallery', {})
})

app.get('/product', (req, res) => {
    res.status(200).render('product', {})
})

app.post('/product', (req, res) => {
    // spara ny produkt
    new productItem({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imgUrl: req.body.imgUrl
    }).save()

    res.status(200).render('product', {})
})

module.exports = { app, port, express }