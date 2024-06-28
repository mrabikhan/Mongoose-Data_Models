import mongoose from 'mongoose';
const subtodoSchema = new mongoose.Schema(
  {
    complete: {
      type: Boolean,
      default: false
    },
    createdBy:{
      type: mongoose.Types.ObjectId,
      ref: "User"
    }
  }, {timestamps: true}
)
export const Subtodo = mongoose.model("Subtodo", subtodoSchema);
