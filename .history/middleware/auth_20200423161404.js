const jwt = require('jsonwebtoken')
const taskDemo = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewcourse')
    //     const user = await taskDemo.findOne({ _id: decoded._id, 'tokens.token': token})
    //    // console.log(token)
    //    if(!user) {
    //        throw new Error()
    //    }

    //    req.token = token
    //    req.user = user
    console.log('fgfrhebhjertb')
       next()
        
    } catch (e) {
        res.status(401).send({error: 'please authenticate'});
    }
}

module.exports = auth
