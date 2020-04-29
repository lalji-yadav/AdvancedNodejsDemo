const express = require('express')
const Task = require('../models/task')

const router = new express.Router()

router.post('/task', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
    
    // console.log(task);
})

router.post('/task/login', async (req, res) => {
    try {
        const task = await Task.loginDemo(req.body.email, req.body.password)
        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }

})

// router.post('/users/login', async (req, res) => {
//     try {
//        const user = await User.findByCre(req.body.email, req.body.password) 
//        const token = await user.authToken()
//        res.send({ user, token })
//     } catch (e) {
//        res.status(400).send() 
//     }
// })

module.exports = router