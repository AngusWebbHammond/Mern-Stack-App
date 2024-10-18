const mongoose = require ('mongoose');

const todoSchema = new mongoose.Schema({
    title: {type: String, required:true},
    type: String,
    description: String,
    priority: String,
    deadline: Date
  }, { timestamps: true });
  
  module.exports = mongoose.model('Todo', todoSchema);