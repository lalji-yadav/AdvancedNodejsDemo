const mongoose = require('mongoose')

const schemaDemo = new mongoose.Schema({
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
    date: {
        type: Date,
        required: true
       // default: Date.now
    },
    arrName: [],
    // ofarrString: [String],
    // ofarrNumber: [Number],
    password: {
        type: String,
        required: true
    }
})

const Userdemo = new mongoose.model('Userdemo', schemaDemo)
module.exports = Userdemo

// const aa = new m ({ name: 'Seva lal'})

// console.log(m.name);

// aa.save()
