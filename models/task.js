const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user:{ type: mongoose.Schema.Types.ObjectId,
    ref: "user"},
  description: { type: String, required:[true,'description is required']},
  completed: { type: Boolean,default:false},
},{ timestamps: true });
module.exports = mongoose.model("task", taskSchema);