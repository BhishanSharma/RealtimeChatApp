import dotenv from "dotenv";
import { server } from "./app.js";
import connectDb from "./db/index.js";
import redis from "redis";

dotenv.config({
  path: "./.env",
});

// Create Redis client
export const redisClient = redis.createClient();

// Connect to MongoDB + Redis together
Promise.all([
  connectDb(),
  redisClient.connect()
])
.then(() => {
  console.log('MongoDB connected');
  console.log('Redis connected');

  server.listen(process.env.PORT, () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
  });
})
.catch((error) => {
  console.log("Connection failed !!!", error);
});
