const mongoose = require('mongoose');


//schema
const postSchema = new mongoose.Schema({
  image:String,
  caption:String,
})


// here ,post is name of the collections , 
// jo collection ka naam hoga wo iss string ke andar bata rahe hote hai
const postModel = mongoose.model("post",postSchema);

module.exports = postModel;