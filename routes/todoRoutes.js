// express instance
const express = require("express");
// function to create routes provided by express
const router = express.Router();
// import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodos, getTodo } = require("../controllers/getTodos");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

// defining API routes 
router.post("/createTodo", createTodo)
router.get("/getTodos", getTodos)
router.get("/getTodo/:id", getTodo)
router.put("/updateTodo/:id", updateTodo)
router.delete("/deleteTodo/:id", deleteTodo)

module.exports = router;