import mongoose from 'mongoose'
const todoSchema = new mongoose.Schema(
  {
    tasks: {
      content: {
        type: String,
        required: true
      },
    complete: {
      type: Boolean,
      default: false
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // defining Relationship with other schema 
      ref: "User"
    },  
    subTodos: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subtodo" 
      }
    ]
    }
  }, {timestamps: true}
)
export const Todo = mongoose.model("Todo", todoSchema)