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

const schema1 = new mongoose.Schema({ age: Number }); // age will be cast to a Number
const schema2 = new mongoose.Schema({ age: 'Number' }); // Equivalent

const Car = mongoose.model('Car', schema2);
const mm = new Car();
mm.age = 15;
mm.age = true;
mm.age = false;
mm.age.valueOf = 45;
// new Car({ age: '15' }).age; // 15 as a Number
// new Car({ age: true }).age; // 1 as a Number
// new Car({ age: false }).age; // 0 as a Number
// new Car({ age: { valueOf: () => 83 } }).age; // 83 as a Number

const modelDemo = mongoose.model('modelDemo', blogSchema)

const m = new modelDemo;

m.title = 'Lal ji Yadav';
m.save()
