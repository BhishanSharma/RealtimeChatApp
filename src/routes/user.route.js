import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller";
import { verifyJWT } from "../middlewares/verifyJWT.middleware";

const routes = Router();

routes.route("/register").post(registerUser);
routes.route("/login").post(loginUser);
routes.route("/logout").post(verifyJWT, logoutUser);
routes.route("/refresh-token").post(refreshAccessToken);

export default routes;