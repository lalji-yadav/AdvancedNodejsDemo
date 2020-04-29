const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task01 = require('./task01')

// const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    anubhav: {
        type: Buffer
    } 
},
{
    timestamps: true,
    autoIndex: true
}
);

// create virtual relationship

taskSchema.virtual('tasks', {
    ref: 'Task01',
    localField: '_id',
    foreignField: 'owner'

}) 

// delete all route token and password to use toJSON
taskSchema.methods.toJSON = function () {
    const task = this
    const taskObj = task.toObject()
    delete taskObj.password
    delete taskObj.tokens
    delete taskObj.anubhav

   // console.log(taskObj)

    return taskObj
}

// generate token 
taskSchema.methods.genToken = async function() {
    const task = this
    const token = jwt.sign({id: task._id.toString()}, process.env.JWT_SECRET)
    task.tokens = task.tokens.concat({ token })
    await task.save()

    return token

}

// login
taskSchema.statics.loginDemo = async (email, password) => {
    const task = await Task.findOne({ email })
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
    if(task.isModified('password')) {
        task.password = await bcrypt.hash(task.password, 8)
    }
    next();
})

// Remove user task when user remove

taskSchema.pre('remove', async function (next) {
  const task = this
  await Task01.deleteMany({ owner: task._id })

  next()

})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task

