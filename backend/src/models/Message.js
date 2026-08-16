<<<<<<< HEAD
=======

>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
<<<<<<< HEAD
      trim: true,
      maxlength: 2000,
=======
>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
    },
    image: {
      type: String,
    },
  },
<<<<<<< HEAD
  { timestamps: true }
=======
  { timestamps: true } // createdAt & updatedAt
>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
);

const Message = mongoose.model("Message", messageSchema);

<<<<<<< HEAD
export default Message;
=======
export default Message;
>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
