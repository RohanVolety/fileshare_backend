require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  // DataBase connection
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
   
    useUnifiedTopology: true,
    
  });
  const connection = mongoose.connection;
  connection
    .once("open", () => {
      console.log("databse connected");
    })
    .on('error',err => {
      console.log("connection failed");
    })
}

module.exports = connectDB;
