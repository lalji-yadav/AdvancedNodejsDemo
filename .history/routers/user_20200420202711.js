const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/user', (req, res) => {
    const user = new User(req.body)

    // console.log(req.body)
    // user.save()

    user.save().then(() => {
        res.send(user)
    }).catch(() => {
        res.send(err)
    });
})

router.get('/user', (req, res) => {
    res.send('testing')
    const user = User.find({})
    user.save().then(() => {
        res.send(user)
    }).catch(() => {
        res.send(err)
    });
})

module.exports = router
