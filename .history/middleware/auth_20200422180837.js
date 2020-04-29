// const auth = require('express')

const auth = async (req, res, next) => {
    res.send('auth moddleware')
    next()
}

module.exports = auth