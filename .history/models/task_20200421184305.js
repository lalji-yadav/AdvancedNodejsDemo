const mongoose = require('mongoose')

// const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
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
        required: true
        // min: 6,
        // max: 10
    }

},
{
    autoIndex: true
});

const taskDemo = mongoose.model('Task', taskSchema)
module.exports = taskDemo