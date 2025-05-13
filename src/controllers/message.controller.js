import { User } from "../models/user.model.js";
import { Message } from "../models/message.model.js";
import { getSocketServerInstance } from "../sockets/io.js";
import { redisClient as client } from "../index.js";

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

  // Create a unique cache key for the chat
  const cacheKey = `chat:${user_id}:${receiverUser._id}`;

  try {
    // Check if chat exists in Redis
    const cachedMessages = await client.get(cacheKey);
    
    if (cachedMessages) {
      // If found in Redis, return cached messages
      return res.status(200).json({ messages: JSON.parse(cachedMessages) });
    }

    // If not found in cache, fetch from MongoDB
    const messages = await Message.find({
      $or: [
        { sender_id: user_id, receiver_id: receiverUser._id },
        { sender_id: receiverUser._id, receiver_id: user_id }
      ]
    }).sort({ createdAt: 1 });

    if (!messages) {
      return res.status(404).json({ message: "No messages found" });
    }

    // Save the fetched messages in Redis for next time
    await client.setEx(cacheKey, 10, JSON.stringify(messages)); // Cache for 10 seconds

    return res.status(200).json({ messages });

  } catch (error) {
    console.error("Redis error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export { sendMessage, getChat };