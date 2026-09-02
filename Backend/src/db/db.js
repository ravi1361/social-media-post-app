const mongoose = require('mongoose');

async function connectDB(){
  await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000
  });
  console.log("connected to DB");
}

module.exports = connectDB;
