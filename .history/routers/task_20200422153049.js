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

router.post('/task/login', async (req, res) => {
    try {
        const task = await Task.loginDemo(req.body.email, req.body.password)
        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }
    // const task = await Task.loginDemo().then(() => {
    //     res.send(task)
    // }).catch((err) => {
    //     res.status(400).send(err)
    // })

})

router.post('/users/login', async (req, res) => {
    try {
       const user = await User.findByCre(req.body.email, req.body.password) 
       const token = await user.authToken()
       res.send({ user, token })
    } catch (e) {
       res.status(400).send() 
    }
})

module.exports = router