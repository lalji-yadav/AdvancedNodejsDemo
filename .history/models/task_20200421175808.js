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

})