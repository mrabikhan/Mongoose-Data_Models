import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, 'Password must be 8 character'],
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    }
  }, {timestamps: true} //secondary object for timestamps (createdAt , updatedAt)
);
export const User = mongoose.model("User", userSchema);
// when "Users" store in mongoose database, it will convert to plural and i lowercase "users"