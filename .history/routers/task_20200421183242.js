const express = require('express')
const Task = require('../models/task')

const app = express()

app.post('/task', (req, res) => {
    const task = new Task(req.body)
    res.save()
    console.log(task);
})

module.exports = Task