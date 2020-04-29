const mongoose = require('mongoose')

const Schema = mongoose.Schema()

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 10,
    }

},
{
    autoIndex: true
})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task