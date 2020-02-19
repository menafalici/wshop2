// Härifrån startar vi upp vår webshop
const mongoose = require('mongoose')
const path = require('path')
const sassMiddleware = require('node-sass-middleware')

const { app, port } = require('./src/server')
const dbConfig = require('./config/config')

app.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}))
app.set('view engine', 'ejs')

// Kicka igång servern
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true }
mongoose.connect(dbConfig.databaseURL, dbOptions).then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}!`))
})