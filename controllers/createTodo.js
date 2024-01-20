// import todo model
const Todo = require("../models/todo");

// db interaction i.e. async func &&  
// this function can also be exported by module.exports
exports.createTodo = async (req, res) => {
  try {
    // extract title and description from req body
    const { title, description } = req.body;

    //create a new todo object and insert it into db
    const response = await Todo.create({ title, description });

    // send a json response with success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (e) {
    // entry failed from server side
    console.error(e);

    // sending res status as failed
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: e.message,
    });
  }
};
