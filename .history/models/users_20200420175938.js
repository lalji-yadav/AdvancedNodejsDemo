const mongoose = require('mongoose')

const schemaDemo = new mongoose.Schema({
    name: String,
})

const m = new schemaDemo({ name: 'Seva Lala'})

// console.log(m.name);

m.save()
