const express = require('express')
require('./db/dbConnection')
// const User = require('./models/user')
const app = express()
const userRouter = require('./routers/user')

const port = process.env.port || 3000
app.use(express.json())
app.use(userRouter)
// app.post('/user', (req, res) => {
//     const user = new User(req.body)

//    // console.log(req.body)
//    // user.save()

//     user.save().then(() => {
//         res.send(user)
//     }).catch(() => {
//         res.send(err)
//     });
// })

app.listen(port, () => {
 console.log('listen port', + port)
})
