import express from "express"
import auth_controllers from "../controllers/auth_controllers.js";

const router = express.Router();

router.post("/register", auth_controllers.registerUser);
router.get("/test", (req, res) => {
    console.log("Cookie", req.cookies);
    res.json({
        message: "Test route",
        Cookies: req.cookies
    })
})


export default router