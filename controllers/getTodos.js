// import todo model
const Todo = require("../models/todo");

exports.getTodos = async (req, res) => {
  try {
    // fetch all todos from DB
    const todos = await Todo.find({});

    // response 
    res.status(200).json({
        success: true,
        data: todos,
        message: "This is entire todo data"
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({
        success: false,
        error: e.message,
        message : "internal server error"
    })
  }
};

exports.getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    // extract todo basis on id parameter
    const todo = await Todo.findById({_id : id})

    // data for given id not found 
    if(!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with given id"
      })
    }
    // data for give id is found
    res.status(200).json({
        success: true,
        data: todo,
        message: "Todo data found"
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({
        success: false,
        error: e.message,
        message : "internal server error"
    })
  }
};
