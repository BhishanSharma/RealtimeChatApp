import { User } from "../models/user.model.js";
import Message from "../models/message.model.js";
import { getSocketServerInstance } from "../sockets/io.js";

const sendMessage = async (req, res) => {
  const { receiver, content } = req.body;
  const sender_id = req.user_id;
  
  if (!content?.trim()) {
    return res.status(400).json({ message: "Message content is empty" });
  }
  
  const receiverUser = await User.findOne({ email: receiver }).select(
    "_id socketId"
  );

  if (!sender_id || !receiverUser) {
    return res.status(404).json({ message: "User not found" });
  }

  const newMessage = await Message.create({
    sender_id,
    receiver_id: receiverUser._id,
    content,
  });

  if (!newMessage) {
    return res.status(500).json({ message: "Failed to send message" });
  }

  // Emit to receiver if connected
  const io = getSocketServerInstance();
  if (receiverUser.socketId) {
    io.to(receiverUser.socketId).emit("newMessage", newMessage);
  }

  return res
    .status(200)
    .json({ message: "Message sent successfully", newMessage });
};

const getChat = async (req, res) => {
  const user_id = req.user_id;
  const { receiver } = req.body;
  const receiverUser = await User.findOne({ email: receiver }).select("_id");

  if (!receiverUser)
    return res.status(404).json({ message: "Receiver not found" });

  const messages = await Message.find({
    $or: [
      { sender_id: user_id, receiver_id: receiverUser._id },
      { sender_id: receiverUser._id, receiver_id: user_id }
    ]
  }).sort({ createdAt: 1 });

  if (!messages) {
    return res.status(404).json({ message: "No messages found" });
  }

  return res.status(200).json({ messages });
};

export { sendMessage, getChat };
