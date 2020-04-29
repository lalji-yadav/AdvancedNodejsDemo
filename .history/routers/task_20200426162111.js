const express = require('express')
const multer = require('multer')
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
    const _id = req.task._id

    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, { new: true })
        if(!task) {
            return res.status(404).send('Not Found')
        }
        res.status(200).send(task)
        
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/task/me', auth, async (req, res) => {
   // const _id = req.task._id;
   // console.log(_id);

    try {
        // const task = await Task.findByIdAndDelete(_id)
        // if(!task) {
        //     return res.status(404).send('Not found')
        // }
        await req.task.remove()

       res.status(200).send(req.task)

    } catch (error) {
        res.status(404).send(error)
    }

   })

// uploade file-------------------------------------------

   const upload = multer({ 
      // dest: 'anubhavs',
       limits: {
           fileSize: 1000000
       },
       fileFilter(req, file, cb) {
           if(!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
               return cb(new Error('Please upload an image'))
           }

        cb(undefined, true)
       }
       
     })

   router.post('/task/me/anubhav', auth, upload.single('anubhav'), async (req, res) => {
       req.task.anubhav = req.file.buffer
       await req.task.save()

       res.send('Uploaded file')
   }, (error, req, res, next) => {
       res.status(400).send({ error: error.message })
   })

   // delete uploaded file 
   router.delete('/task/me/anubhav', auth, async (req, res) => {
       req.task.anubhav = undefined
      await req.task.save()
      res.send('deleted file')
   })

module.exports = router

