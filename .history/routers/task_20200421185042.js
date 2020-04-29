const express = require('express')
const Task = require('../models/task')

const router = new express.Router()

router.post('/task', (req, res) => {
   // const task = new Task(req.body)
    const task = new Task(req.body).then(() => {
        res.status(201).send(task)
    }).catch((err) => {
        res.status(500).send(err)
    })
   // res.save()
    console.log(task);
})

module.exports = router