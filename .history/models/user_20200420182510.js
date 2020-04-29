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
    password: {
        type: String,
        required: true
    }
})

const m = new mongoose.model('m', schemaDemo)

const aa = new m ({ name: 'Seva lal'})

// console.log(m.name);

aa.save()
