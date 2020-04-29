const express = require('express')
const Task01 = require('../models/task01')
const router = express.Router()
const auth = require('../middleware/auth')

router.post('/task01', auth,  async (req, res) => {

  //  const task01 = Task01(req.body)
  const task01 = Task01({
      ...req.body,
      owner: req.task._id
  })

    try {
        await task01.save()
        res.status(201).send(task01)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/task01', async (req, res) => {
    
    try {
        const task01 = await Task01.find({})
        res.status(200).send(task01)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/task01/:id', async (req, res) => {
    const _id = req.param.id
    
    try {
        const task01 = await Task01.findById(_id)

        if(!task01) {
          res.status(404).send('Not found')
        }
        res.status(200).send(task01)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/task01/:id', async (req, res) => {

    const _id = req.param.id
    
    try {
        const task01 = await Task01.findByIdAndDelete(_id)
        res.status(200).send(task01)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router