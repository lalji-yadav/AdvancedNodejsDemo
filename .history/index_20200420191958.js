const express = require('express')
require('./db/dbConnection')
const User = require('./models/user')
const app = express()

const port = process.env.port || 3000
app.use(express.json())

app.post('/user', (req, res) => {
    const user = new User(req.body)
    console.log(req.body)
   // user.save()

    user.save().then(() => {
        res.send()
    }).catch(() => {
        res.send(err)
    });
})

app.listen(port, () => {
 console.log('listen port', + port)
})
