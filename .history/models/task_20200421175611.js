const mongoose = require('mongoose')

const Schema = mongoose.Schema()

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    }

})