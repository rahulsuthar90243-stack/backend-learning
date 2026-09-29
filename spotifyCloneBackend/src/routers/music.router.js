import express from "express";
import multer from "multer";
import { createMusic, createAlbum, getAllMusic, getAllAlbum, getAlbumById } from "../controllers/music.controller.js";
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

router.get("/", 
    authMiddleware.authUser, 
    getAllMusic)    

router.get("/albums", 
    authMiddleware.authUser, 
    getAllAlbum)

router.get("/album/:albumId", 
    authMiddleware.authUser,
    getAlbumById
)   

export default router;