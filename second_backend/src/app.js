import express from 'express';
import {Notes} from './models/note.model.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

const notes = [];

app.post("/notes", async (req, res) => {
  notes.push(req.body);

  const data = req.body;

  await Notes.create({
    title: data.title,
    description: data.description
  })

  res.status(201).json({
    message: "node create successfully"
  })
})

app.get("/notes", async (req, res) => {
  const notes = await Notes.find();

  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes
  })
})


app.delete("/notes/:id", async (req, res) => {
  const id =  req.params.id

  await Notes.findOneAndDelete({
    _id: id
  })

  res.status(200).json({
    message: "note deleted successfully"
  })
})

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id
  const description = req.body.description;

  await Notes.findOneAndUpdate(
    {_id: id}, 
    {description: description}
  )

  res.status(200).json({
    message: "note update successfully"
  })
})



// app.delete("/notes/:index", (req, res) => {
//     const index = req.params.index;
//     delete notes[index];
    
//     res.status(200).json({
//         message: "notes deleted successfully"
//     })
// })

// app.patch("/notes/:index", (req, res) => {
//   const index = Number(req.params.index);
//   const description = req.body.description; 
  
//   notes[index].description = description;

//   res.status(200).json({
//     message: "Nodes Update successfully"
//   })
// })


export default app