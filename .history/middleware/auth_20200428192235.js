const jwt = require('jsonwebtoken')
const Task = require('../models/task')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const task = await Task.findOne({ _id: decoded.id, 'tokens.token': token})

        // console.log(token)
        // console.log(decoded)
        // console.log(task)

        if(!task) {
        throw new Error('no found')
        }
           // req.token = token is used to create mutiple login logout
        req.token = token
        req.task = task

      // console.log('fgfrhebhjertb')
       next()
        
    } catch (e) {
        res.status(401).send({error: 'please authenticate'});
    }
}

module.exports = auth
