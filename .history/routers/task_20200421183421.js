const express = require('express')
const Task = require('../models/task')

const app = express()

app.post('/task', (req, res) => {
    const task = new Task(req.body).then(() => {
        res.save()
    }).catch((err) => {
        res.send(500)
    })
    res.save()
    console.log(task);
})

module.exports = Task