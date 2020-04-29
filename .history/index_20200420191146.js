const express = require('express')
require('./db/dbConnection')
const User = require('./models/user')
const app = express()

const port = process.env.port || 3000
app.use(express.json())

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('Anubhav Kumar Yadav')
})

app.listen(port, () => {
 console.log('listen port', + port)
})
