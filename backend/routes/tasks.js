const express = require('express');

const Task = require('../models/TaskModel');

// creates an instance of the router
const router = express.Router();



const databaseRoutes = require('../controllers/taskController');

// HANDLER FUNCTIONS 

  router.get('/', databaseRoutes.getTasks);
  
  // GET a single task
  router.get('/:id', databaseRoutes.getSingleTask);
  
  // POST a new task

  router.post('/', databaseRoutes.createTask);
  
  // DELETE a task
  router.delete('/:id', databaseRoutes.deleteTask);
  
  // UPDATE a task
  router.patch('/:id', databaseRoutes.updateTask);



module.exports = router;