const jwt = require('jsonwebtoken')
const Task = require('../models/task')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'anubhav')
        const task = await Task.findOne({_id: decoded._id, 'tokens.token': token })

        if(!task) {
            throw new Error()
        }

        next()
        console.log(token)
    } catch (e) {
        res.status(400).send({error: 'please authenticate.'})
    }
    // console.log('auth moddleware')
    // next()
}

module.exports = auth
