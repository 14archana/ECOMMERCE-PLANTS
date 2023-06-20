//  const mongoose = require('mongoose');
//  require('dotenv').config();

//  mongoose.connect(process.env.mongo_url);
//  const connection = mongoose.connection;
//  connection.on('connected' ,()=>{
//     console.log('mongo DB connection established');

//  })
//  connection.on('error',(err)=>{
//     console.log('mongoDB connection error');
//  })
 
   // module.exports = connection;
  



// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(process.env.mongo_url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('MongoDB connection established');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });

// const connection = mongoose.connection;
// module.exports = connection;





// mongoose.connect('mongodb+srv://krishna:sivam123@cluster0.czukufp.mongodb.net/')
//     .then(() => {
//     console.log("Database Connected");
// })
//     .catch(err => {
//     console.log("Database Not Connected",err.message);
// });