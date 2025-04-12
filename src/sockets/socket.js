import { Server } from "socket.io";
import { User } from "../models/user.model.js";
import { setSocketServerInstance } from "./io.js";

export const registerSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    },
  });
  
  setSocketServerInstance(io);
  
  io.on("connection", async (socket) => {
    console.log("⚡ A user connected:", socket.id);

    // Client should send userId after connection
    socket.on("register", async (userId) => {
      try {
        await User.findByIdAndUpdate(userId, { socketId: socket.id });
        console.log(`✅ Socket ID saved for user ${userId}`);
      } catch (err) {
        console.error("Failed to update socket ID:", err);
      }
    });

    socket.on("disconnect", async () => {
      console.log("❌ A user disconnected:", socket.id);
      try {
        await User.findOneAndUpdate({ socketId: socket.id }, { socketId: null });
      } catch (err) {
        console.error("Failed to clear socket ID:", err);
      }
    });
  });

  return io;
};
