const jwt = require('jsonwebtoken')
const Task = require('../models/task')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const task = await Task.findOne({ _id: decoded._id, 'tokens.token': token})
       // console.log(token)
        if(!task) {
        throw new Error()
        }

       // req.token = token
        req.task = task

       // console.log('fgfrhebhjertb')
       next()
        
    } catch (e) {
        res.status(401).send({error: 'please authenticate'});
    }
}

module.exports = auth
