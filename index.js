const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(routes)

app.listen(3000, () => {
    console.log('on')
})

// const database = require('./src/config/db.js')
// database.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));
