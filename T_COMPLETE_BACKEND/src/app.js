import express from "express";
import multer from "multer";
import {uplodeFile} from "./services/storage.service.js";


const app = express();
app.use(express.json());

const uplode = multer({storage: multer.memoryStorage()})

app.post("/create-post",  uplode.single("image"), async(req, res) => {
  console.log(req.body);
  console.log(req.file);

  const result = await uplodeFile(req.file.buffer);
  console.log(result);
  
  res.status(200).json({
     message: "Post create successfully"
  })
})

app.get("/", (req, res) => {
    res.send("Backend");
})

export default app;