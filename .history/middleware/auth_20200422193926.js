const jwt = require('jsonwebtoken')
const Task = require('../models/task')

const auth = async (req, res, next) => {

    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'anubhav')

        console.log(token)
        
    } catch (error) {
        res.status(401).send({error: 'Please authenticate'})
    }
    
    // console.log('auth moddleware')
    // next()
}

module.exports = auth
