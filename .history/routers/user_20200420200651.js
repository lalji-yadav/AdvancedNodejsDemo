const express = require('express')
const User = require('../models/user')
const app = new express()

app.post('/user', (req, res) => {
    const user = new User(req.body)

    // console.log(req.body)
    // user.save()

    user.save().then(() => {
        res.send(user)
    }).catch(() => {
        res.send(err)
    });
})

module.exports = app
