 const mongoose = require('mongoose');

 mongoose.connect(process.env.mongo_url);
 const connection = mongoose.connection;
 connection.on('connected' ,()=>{
    console.log('mongo DB connection established');

 })
 connection.on('error',(err)=>{
    console.log('mongoDB connection error');
 })

 
   module.exports = connection;