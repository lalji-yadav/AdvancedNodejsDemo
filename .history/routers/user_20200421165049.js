const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/user', (req, res) => {
    const user = new User(req.body)

    // console.log(req.body)
    // console.log(req.baseUrl)
    // console.log(req.path)
    // console.log(req.originalUrl)
    // user.save()

    user.save().then(() => {
        res.send(user)
    }).catch(() => {
        res.status(500).send(err)
    });

    // console.log(req.params.name)
    // console.log(req.protocol)
    // console.log(req.route)
})

router.get('/user', (req, res) => {
   // res.send('testing')
    const user = User.find({}).then((user) => {
        res.send(user)
    }).catch(() => {
        res.send(err)
    });
  //  user.save()
})

router.get('/user/:id', (req, res) => {
  const _id = req.params.id
  User.findById(_id).then((resData) => {
      if(!resData) {
          return res.status(404).send('Not found')
      }
     res.status(200).send(resData)
  }).catch((err) => {
      res.status(404).send(err)
  })
})

router.delete('/user', (req,res) => {

    User.deleteMany({}).then((resData) => {
        res.send(resData)
    }).catch((err) => {
        res.status(404).send(err)
    })
})

router.delete('/user/:id', (req, res) => {
 const _id = req.params.id;
 // console.log(_id);

    User.findByIdAndDelete(_id).then((resData) => {
        if(!resData) {
            return res.status(404).send('Not found')
        }
      res.status(200).send(resData)
    }).catch((err) => {
        res.status(404).send(err)
    })
})

module.exports = router
