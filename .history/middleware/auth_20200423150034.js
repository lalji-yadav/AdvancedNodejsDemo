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

        res.task = task

        next()
       // console.log(token)
    } catch (e) {
        res.status(401).send({error: 'please authenticate.'})
    }
    // console.log('auth moddleware')
    // next()
}

module.exports = auth


const auth = async (req, res, next) => {
    try {
       const token = req.header('Authorization').replace('Bearer ', '')
       const decoded = jwt.verify(token, 'anubhav') 
       const user = await Task.findOne({ _id: decoded._id, 'tokens.token': token })
   
       if(!user) {
           throw new Error()
       }
       
       req.token = token
       req.user = user
       console.log(user)
       next()
       
    } catch (e) {
        res.status(401).send({error: 'Please authenticate anubhav'})
    }
   }
   
   module.exports = auth