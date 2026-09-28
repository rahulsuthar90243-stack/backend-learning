import jwt from "jsonwebtoken";
import "dotenv/config";
import { uploadeFile } from "../service/storage.service.js";
import { musicModel } from "../models/music.model.js";
import { albumModel } from "../models/album.model.js";

const createMusic = async (req, res) => {
    const { title } = req.body;
    const file = req.file;

    if (!title || !file) {
      return res.status(400).json({ message: "title and music file are required" });
    }

    const result = await uploadeFile(file.buffer.toString("base64"));
    const music = await musicModel.create({
      url: result.url,
      title,
      artist: req.user.id,
    });

    return res.status(201).json({
      message: "Music create successfully",
      music: {
        id: music._id,
        url: music.url,
        title: music.title,
        artist: music.artist,
      },
    });
};


const createAlbum = async (req, res) => {


        const {title, musics} = req.body;

        const album = await albumModel.create({
            title,
            artist: req.user.id,
            musics: musics
        })

        res.status(201).json({
            message: "Album create successfully",
            id: album.id,
            title: album.title,
            artist: album.artist,
            musics: album.musics
        })
}

export { createMusic, createAlbum };