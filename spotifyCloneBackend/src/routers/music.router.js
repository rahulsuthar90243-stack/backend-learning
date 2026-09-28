import express from "express";
import multer from "multer";
import { createMusic, createAlbum } from "../controllers/music.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";


const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/upload", 
    authMiddleware.authArtist, 
    upload.single("music"), 
    createMusic);

router.post("/album", 
    authMiddleware.authArtist,
    createAlbum);


export default router;