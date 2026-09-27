import jwt from "jsonwebtoken";
import { uploadeFile } from "../service/storage.service.js";
import "dotenv/config"
import { musicModel } from "../models/music.model.js";


const createMusic = async(req, res) => {

    try {

        const token = req.cookies.token;

        if(!token){
            res.status(401).json({message: "Unauthorized"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.role !== "admin"){
            res.status(402).json({message: "You don't have access to create a music"});
        }
        
    } catch (error) {
        res.status(401).json({message: "Unauthorized"});
    }

    const {title} = req.title;
    const file = req.file;

    const result = await uploadeFile(file.buffer.toString('base64'));
    const music = await musicModel.create({
     url: result.url,
     title,
     artist: decoded.id
    })

    res.status(201).json({
        message: "Music create successfully",
        music:{
            id: music.id,
            url: music.url,
            title: music.title,
            artist: music.artist
        }
    })
}

export {createMusic};