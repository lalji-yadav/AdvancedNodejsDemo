const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/advancedNodejsDemo',
 {useNewUrlParser: true},
 { useUnifiedTopology: true }
 );