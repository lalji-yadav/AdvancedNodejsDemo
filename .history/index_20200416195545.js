const express = require('express')
require('./db/dbConnection')
const app = express()

const port = process.env.port || 3000

app.get('/', (req, res) => {
    console.log('hiiii')
})

app.listen(port, () => {
 console.log('listen port', + port)
})

