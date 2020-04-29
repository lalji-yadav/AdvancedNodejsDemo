const express = require('express')
const Task01 = require('../models/task01')
const router = express.Router()

router.post('/task01', async (req, res) => {

    const task01 = Task01(req.body)

    try {
        await task01.save()
        res.status(201).send(task01)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/task01', async (req, res) => {
    try {
        res.status().send()
    } catch (error) {
        res.status().send()
    }
})

module.exports = router
