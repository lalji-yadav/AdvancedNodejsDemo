const mongoose = require('mongoose')

const schemaDemo = new mongoose.Schema({
    name: String,
})

const m = new mongoose.model('m', schemaDemo)

const aa = new m ({ name: 'Seva lal'})

// console.log(m.name);

aa.save()
