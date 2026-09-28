import jwt from "jsonwebtoken"
import "dotenv/config"

const authArtist = async (req, res, next) => {

    const token = req.cookies.token;

    if(!token){
        return res.status(402).json({message: "Unauthorized"});
    }

    try {
     
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "artist"){
            return res.status(403).json({message: "You don't have access to create a music"});
        }

        req.user = decoded;

        next();

    } catch (error) {
        console.log("Error", error );
        return res.status(401).json({ message: "Unauthorized" }); 
    }
}

export default {authArtist}