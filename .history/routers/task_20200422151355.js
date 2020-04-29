const express = require('express')
const Task = require('../models/task')

const router = new express.Router()

router.post('/task', (req, res) => {
    const task = new Task(req.body)
    
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((err) => {
        res.status(500).send(err)
    })
   
    // console.log(task);
})

router.post('/task/login', (req, res) => {
    const task = Task.loginDemo(req.body.email, req.body.password).then(() => {
        res.send(task)
    }).catch((err) => {
        res.send(err)
    })

})

module.exports = router