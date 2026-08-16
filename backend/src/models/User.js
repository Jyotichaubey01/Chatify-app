import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true } // createdAt & updatedAt
);

const User = mongoose.model("User", userSchema);

<<<<<<< HEAD
export default User;
=======
export default User;
>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
