// Härifrån startar vi upp vår webshop


const mongoose = require('mongoose')
const { app, port } = require('./src/server')
const dbConfig = require('./config/config')
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true }

let dbUrl = process.env.MONGO_ATLAS_URL




mongoose.connect(dbConfig.databaseURL, dbOptions).then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}!`))
})

module.exports = { app, port }