const jwt = require('jsonwebtoken')
const Task = require('../models/task')

const auth = async (req, res, next) => {

    try {
        
    } catch (error) {
        res.status(401).send({error: 'Please authenticate'})
    }
    console.log('auth moddleware')
    next()
}

module.exports = auth
