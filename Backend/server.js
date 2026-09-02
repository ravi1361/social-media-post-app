require("dotenv").config();
const app = require("./src/app");
const connectDB = require('./src/db/db')


// calling the fnc
connectDB()
  // .then(() => {
  //   app.listen(3000, () => {
  //     console.log("server is running on port 3000");
  //   });
  // })
  // .catch((err) => {
  //   console.error("Failed to connect to DB:", err);
  //   process.exit(1);
  // });

  module.exports = app ;