const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/advancedNodejsDemo',
 {useNewUrlParser: true,
 useUnifiedTopology: true
}
).catch(error => handleError(error));

// mongoose.connection.on('error', err => {
//   logError(err);
// });

var Schema = mongoose.Schema;

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
},
{
  capped: { size: 1024, max: 1000 },
  collection: 'anubhav',
},
{ _id: 100 },
{ bufferCommands: false }
);

const schema1 = new mongoose.Schema({ age: Number }); // age will be cast to a Number
const schema2 = new mongoose.Schema({ age: 'Number' }); // Equivalent

const Car = mongoose.model('Car', schema2);
const mm = new Car;
mm.age = '15';
mm.save()
// new Car({ age: '15' }).age; // 15 as a Number
// new Car({ age: true }).age; // 1 as a Number
// new Car({ age: false }).age; // 0 as a Number
// new Car({ age: { valueOf: () => 83 } }).age; // 83 as a Number

const modelDemo = mongoose.model('modelDemo', blogSchema)

const m = new modelDemo;

m.title = 'Lal ji Yadav';
m.save()

const schema11 = new Schema({ binData: Buffer }); // binData will be cast to a Buffer
const schema22 = new Schema({ binData: 'Buffer' }); // Equivalent

const Data = mongoose.model('Data', schema22);
const file1 = new Data({ binData: 'test'}); // {"type":"Buffer","data":[116,101,115,116]}
const file2 = new Data({ binData: 72987 }); // {"type":"Buffer","data":[27]}
const file4 = new Data({ binData: { type: 'Buffer', data: [1, 2, 3]}}); // {"type":"Buffer","data":[1,2,3]}

file1.save()
file2.save()
file4.save()
