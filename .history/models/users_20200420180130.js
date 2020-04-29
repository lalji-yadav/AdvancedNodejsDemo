const mongoose = require('mongoose')

// const schemaDemo = new mongoose.Schema({
//     name: String,
// })

const m = new mongoose.model('m', { name: 'Seva Lala'})

// console.log(m.name);

m.save()
