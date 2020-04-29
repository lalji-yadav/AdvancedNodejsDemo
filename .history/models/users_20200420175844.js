const mongoose = require('mongoose')

const schemaDemo = new mongoose.Schema({
    name: String,
})

var m = schemaDemo({ name: 'Seva Lala'})

// console.log(m.name);

m.save()
