const express = require('express')
require('./db/dbConnection')
require('dotenv').config({path: '/config/dev'});
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const task01Router = require('./routers/task01')

const app = express()
const port = process.env.PORT

// const multer = require('multer')

// var upload = multer({ 
//     dest: 'images',
//     limits: {
//     fileSize: 10000
//    },
//    fileFilter(req, file, cb) {
//       if(!file.originalname.endsWith('.pdf')) {
//           return cb('Please uploaded PDF file')
//       }
//       cb(undefined, true)
//    }

// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//  res.send()
// })


// app.use((req, res, next) => {
//     res.send('this website is under maintances')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(task01Router)


app.listen(port, () => {
 console.log('listen port', + port)
})

// const task01 = require('./models/task01')
// const task02 = require('./models/task')

// const main = async () => {
//     // const x = await task01.findById('5ea2dfcb7cce6e14f84abe0f')
//     // await x.populate('owner').execPopulate()
//     // console.log(x.owner)
//     const x = await task02.findById('5ea2b4a09a20183e8c7f30bd')
//     await x.populate('tasks').execPopulate()
//     console.log(x.tasks)
// } 
// main()

// const sgMail = require('@sendgrid/mail')

// const sendgridApikey = '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'

// sgMail.setApiKey(sendgridApikey)

// sgMail.send({
//   to: 'anubhavya246@gmail.com',
//   from: 'anubhavya246@gmail.com',
//   subject: 'my first test app ',
//   text: 'it working ',
//  // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// })
