const jwt = require('jsonwebtoken')
const Task = require('../models/task')

const auth = async (req, res, next) => {
    console.log('auth moddleware')
    next()
}

module.exports = auth