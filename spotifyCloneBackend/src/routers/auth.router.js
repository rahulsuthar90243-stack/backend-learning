import express from "express"
import {registerUser, login, logoutUser} from "../controllers/auth.controller.js";

const router = express.Router();


router.post("/register", registerUser)
router.post("/login", login)

router.post("/logout", logoutUser)


export default router;