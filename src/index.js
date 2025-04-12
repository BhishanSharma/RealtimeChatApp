import dotenv from "dotenv";
import { server } from "./app.js";
import connectDb from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongodb connection failed !!!", error);
  });
