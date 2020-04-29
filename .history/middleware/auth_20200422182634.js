// const auth = require('express')

const auth = async (req, res, next) => {
    console.log('auth moddleware')
    next()
}

module.exports = auth