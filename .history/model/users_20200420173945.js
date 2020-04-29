const mongoose = require('mongoose')

var schemaDemo = new mongoose.Schema({
    name: String
})

var m = new schemaDemo({ name: 'Seva Lala'})

m.save()
