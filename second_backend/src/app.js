import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

const notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "node create successfully"
  })
})

app.get("/notes", (req, res) => {
    res.status(201).json({
        message: "node fetched successfully",
        notes: notes
    })
})

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;
    delete notes[index];
    
    res.status(200).json({
        message: "notes deleted successfully"
    })
})
export default app