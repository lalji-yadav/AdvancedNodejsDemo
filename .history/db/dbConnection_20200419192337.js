const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/advancedNodejsDemo',
 {useNewUrlParser: true,
 useUnifiedTopology: true
}
);

// var Schema = mongoose.Schema;

var blogSchema = new mongoose.Schema({
  title:  String, // String is shorthand for {type: String}
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

const modelDemo = mongoose.model('modelDemo', blogSchema)

const m = new modelDemo;

m.title = 'Lal ji Yadav';
m.save()
