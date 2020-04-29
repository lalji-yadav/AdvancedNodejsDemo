const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

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
                throw new Error('Email is  invalid')
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
        required: true,
        minlength: 6,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password can not contain password')
            }
        }
    }

},
{
    autoIndex: true
});

// userSchema.statics.findByCre = async (email, password) => {
//     const user = await User.findOne({ email })

//     if(!user) {
//         throw new Error('Unable to login')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)
//     if(!isMatch) {
//         throw new Error('Unable to Login')
//     }

//     return user
// }

// login
taskSchema.statics.loginDemo = async (email, password) => {
    const task = await taskDemo.findOne({ email })
    if(!task) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, task.password)
    if(!isMatch) {
        throw new Error('Unable to login')
    }

    return task
}

// Bcrypt password create and update
taskSchema.pre('save', async function(next) {
    const task = this
    // task.password = await bcrypt.hash(task.password, 8)

    if(task.isModified('password')) {
        task.password = await bcrypt.hash(task.password, 8)
    }
    next();
})

// login task

const taskDemo = mongoose.model('taskDemo', taskSchema)
module.exports = taskDemo