import express from "express";
import multer from "multer";
import {uplodeFile} from "./services/storage.service.js";
import { postModel } from "./models/post.model.js";


const app = express();
app.use(express.json());

const uplode = multer({storage: multer.memoryStorage()})

app.post("/create-post",  uplode.single("image"), async(req, res) => {
  console.log(req.body);
  console.log(req.file);

  const result = await uplodeFile(req.file.buffer);
  
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
  })
  
  res.status(200).json({
     message: "Post create successfully",
     post
  })
})

app.get("/create-post", async (req, res) => {
  const data = await postModel.find();

  res.status(200).json({
    data
  })
})

app.get("/", (req, res) => {
    res.send("Backend");
})

export default app;