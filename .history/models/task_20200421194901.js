const mongoose = require('mongoose')
const validator = require('validator')

// const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        }
    },
    mobile: {
        type: Number,
        required: true,
        validate(value) {
          if(value < 0) {
              throw new Error('mobile no will be positive')
          }
        }
    },
    password: {
        type: String,
        required: true
    }

},
{
    autoIndex: true
});

const taskDemo = mongoose.model('Task', taskSchema)
module.exports = taskDemo