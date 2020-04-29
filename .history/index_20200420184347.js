const express = require('express')
require('./db/dbConnection')
require('./models/user')
const app = express()

const port = process.env.port || 3000

app.post('/user', (req, res) => {
    res.send('Anubhav Kumar Yadav')
})

app.listen(port, () => {
 console.log('listen port', + port)
})

