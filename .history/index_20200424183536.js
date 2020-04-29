const express = require('express')
require('./db/dbConnection')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const task01Router = require('./routers/task01')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

// app.use((req, res, next) => {
//     res.send('this website is under maintances')
// })

app.use(userRouter)
app.use(taskRouter)
app.use(task01Router)


app.listen(port, () => {
 console.log('listen port', + port)
})

const task01 = require('./models/task01')
const task02 = require('./routers/task01')

const main = async () => {
    // const x = await task01.findById('5ea2dfcb7cce6e14f84abe0f')
    // await x.populate('owner').execPopulate()
    // console.log(x.owner)
    
} 
main()
