import express from "express"
import auth_controllers from "../controllers/auth_controllers.js";

const router = express.Router();

router.post("/register", auth_controllers.registerUser);


export default router