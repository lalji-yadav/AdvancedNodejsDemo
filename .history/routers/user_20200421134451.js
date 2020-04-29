const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/user', (req, res) => {
    const user = new User(req.body)

    console.log(req.body)
    console.log(req.baseUrl)
    console.log(req.path)
    console.log(req.originalUrl)
    // user.save()

    user.save().then(() => {
        res.send(user)
    }).catch(() => {
        res.send(err)
    });

    console.log(req.params.name)
    console.log(req.protocol)
    console.log(req.route)
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

module.exports = router
