import { Router } from "express";
import { sendMessage } from "../controllers/message.controller.js";
import { verifyJWT } from "../middlewares/verifyJWT.middleware";

const routes = Router();

routes.route("/send").post(verifyJWT, sendMessage);

export default routes;