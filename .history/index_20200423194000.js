const express = require('express')
require('./db/dbConnection')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

// app.use((req, res, next) => {
//     res.send('this website is under maintances')
// })

app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
 console.log('listen port', + port)
})

