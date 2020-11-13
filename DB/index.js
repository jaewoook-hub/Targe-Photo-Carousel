const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost/carousel';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{
  console.log(`connection to database established`)
}).catch(err=>{
 throw err;
})
;
const db = mongoose.connection;

module.exports = db;
