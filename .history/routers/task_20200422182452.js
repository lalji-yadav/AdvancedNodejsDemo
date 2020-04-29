const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')

const router = new express.Router()

router.post('/task', async (req, res) => {
    const task = new Task(req.body)
   
    try {
        await task.save()
        const token = await task.genToken()
        res.status(201).send({task, token})
    } catch (error) {
        res.status(500).send(error)
    }
    
    // console.log(task);
})

router.post('/task/login', async (req, res) => {
    try {
        const task = await Task.loginDemo(req.body.email, req.body.password)
        const token = await task.genToken()
        res.send({task, token})
    } catch (error) {
        res.status(400).send(error)
    }

})

router.get('/task', async (req, res) => {
    
    try {
        const task = await Task.find({})
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router