// import todo model
const Todo = require("../models/todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title, description, updatedAT: Date.now(),
      }
    );
    res.status(200).json({
        success: true,
        data: todo,
        message: "Updated successfully",
      });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: e.message,
    });
  }
};
