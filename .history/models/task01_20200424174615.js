const mongoose = require('mongoose')

const taskScema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
})

const Task01 = mongoose.model('Task01', taskScema)
module.exports = Task01
