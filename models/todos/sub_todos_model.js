import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const subTodosModel = mongoose.model("SubTodo", subTodoSchema);
