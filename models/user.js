const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: null,required:[true,'name is required']},
  email: { type: String, unique: true,required:[true,'email is required'] },
  password: { type: String,required:[true,'password is required']},
  age:{ type: Number,default: null},
  image:{type: String,default: null },
  token:{type:String,default:null}
});
userSchema.path('email').validate(function (email) {
    console.log(email);
    var emailRegex =    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email.match(emailRegex ));
    
    return email.match(emailRegex );// Assuming email has a text attribute
 }, 'email should be valid email')

module.exports = mongoose.model("user", userSchema);