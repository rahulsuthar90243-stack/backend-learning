import express from "express";
import musicController from "../controllers/music.controller.ja"
import multer from "multer"


const upload = multer({
    storage: multer.memoryStorage()
})
const musicrouter = express.Router();


router.post("/upload", upload.single("music"), musicController.createMusic)