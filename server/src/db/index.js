require('dotenv').config();
const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI)

mongoose
  .connect(process.env.MONGODB_URI, { 
  	useNewUrlParser: true, 
  	useUnifiedTopology: true 
  })
  .catch(e => {
  	console.error('Connection error', e.message)
  });

const db = mongoose.connection;

module.exports = db;