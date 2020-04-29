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

router.post('/task/logout', auth, async (req, res) => {
    try {
        req.task.tokens = req.task.tokens.filter((token) => {
          //  console.log(req.task.tokens)
            return token.token !== req.token
        })
        await req.task.save()

        res.send('single logout')
        
    } catch (error) {
        res.status(500).send()
    }
})

router.post('/task/logoutAll', auth, async (req, res) => {
    try {
        req.task.tokens = []
       await req.task.save()

       res.send('All logout')

    } catch (error) {
        res.status(500).send(e)
    }
})

router.get('/task', auth, async (req, res) => {
    
    try {
        const task = await Task.find({})
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/task/me', auth, async (req, res) => {
    res.send(req.task)
})

router.patch('/task/me', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const task = Task.findByIdAndUpdate(_id, req.body, { new: true })
        if(!task) {
            return res.status(404).send('Not Found')
        }
        res.status(200).send(task)
        
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router

