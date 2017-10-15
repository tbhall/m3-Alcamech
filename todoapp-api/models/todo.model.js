var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

//model application data for ToDo Schema
var ToDoSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: String,
    status: String
})

ToDoSchema.plugin(mongoosePaginate)
const ToDo = mongoose.model('Todo', ToDoSchema)

module.exports = ToDo;
