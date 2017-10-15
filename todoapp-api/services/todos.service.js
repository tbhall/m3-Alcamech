/*
Using async-await feature introduced in NodeJS 7.6.
- Can handle both synchronous and asynchronous errors with try/catch
- Conditionals are easier
- Concise and Clean

services to access the Mongoose Models
*/

//get mongoose model
var ToDo = require('../models/todo.model')

_this = this

//async function to get the ToDo list
exports.getTodos = async function(query, page, limit){

    //options setup for the mongoose paginate
    var options = {
        page,
        limit
    }

    //try-catch handle errors
    try {
        var todos = await ToDo.paginate(query, options)
        return todos;
    } catch (e) {
        throw Error('Error while Paginating Todos')
    }
}

//create a new mongoose object
exports.createTodo = async function(todo){
    var newTodo = new ToDo({
        title: todo.title,
        description: todo.description,
        date: new Date(todo.date.year, todo.date.month-1, todo.date.day),
        status: todo.status
    })

    try{
        var savedTodo = await newTodo.save()
        return savedTodo;
    }catch(e){
        throw Error("Error while Creating Todo")
    }
}

exports.updateTodo = async function(todo){
    var id = todo.id

    try{
        //find by Id
        var oldTodo = await ToDo.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }

    //if it doesn't exist
    if(!oldTodo){
        return false;
    }

    console.log(oldTodo)

    //edit the todo object
    oldTodo.title = todo.title
    oldTodo.description = todo.description
    oldTodo.status = todo.status


    console.log(oldTodo)

    try{
        var savedTodo = await oldTodo.save()
        return savedTodo;
    }catch(e){
        throw Error("And Error occured while updating the Todo");
    }
}

//delete the todo object
exports.deleteTodo = async function(id){

    try{
        var deleted = await ToDo.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Todo Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Todo")
    }
}
