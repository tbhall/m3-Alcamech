var express = require('express')

var router = express.Router()
var todos = require('./api/todos.route')

//use todos route module
router.use('/todos', todos);


module.exports = router;
