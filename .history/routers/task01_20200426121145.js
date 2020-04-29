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

// get data task table conditionaly
router.get('/task01', auth, async (req, res) => {

    const match = {}
    
    
    try {
       // const task01 = await Task01.find({owner: req.task._id})
      // await req.task.populate('tasks').execPopulate()
       await req.task.populate({
           path: 'tasks',
           match
       }).execPopulate()

        res.status(200).send(req.task.tasks)
      //  console.log(tasks)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/task01/:id', auth, async (req, res) => {
    const _id = req.params.id
  
    try {
        const task01 = await Task01.findOne({ _id, owner: req.task._id})

        if(!task01) {
          res.status(404).send('Not found')
        }
        res.status(200).send(task01)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.patch('/task01/:id', auth, async (req, res) => {

    const _id = req.params.id
    console.log(_id)
   // console.log(res.task._id)
    
    try {
        const task01 = await Task01.findByIdAndUpdate({ _id, owner: req.task._id }, req.body, { new: true })
        console.log(task01)
        if(!task01) {
            res.send('Not found')
        }
        res.status(200).send(task01)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.delete('/task01/:id', auth, async (req, res) => {

    const _id = req.params.id
    
    try {
       const task01 = await Task01.findByIdAndDelete({_id, owner: req.task._id})

        res.status(200).send(task01)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router
