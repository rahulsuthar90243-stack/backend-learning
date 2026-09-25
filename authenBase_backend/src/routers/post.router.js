import express, { response } from "express"
import jwt from "jsonwebtoken";
import "dotenv/config"
import { userModel } from "../models/user.model.js";

const router = express.Router();


router.post("/create", async (req, res) => {

    const token = req.cookies.Token
    console.log(req.cookies)
    console.log(req.cookies.Token)

    if(!token){
        res.status(401).json({
            message: "Unathorized."
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
        const user = await userModel.findOne({
            _id: decoded.id
        })

        console.log(user);
     
    } catch (error) {
        return res.status(401).json({
            message: "Unathorized"
        })
        
    }

    res.send("Post create successfully");

})


export default router