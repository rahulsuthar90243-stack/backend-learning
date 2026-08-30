import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "The Scarecrow's Award",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 2,
      title: "Atoms Don't Trust",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 3,
      title: "The Broken Pencil",
      content:
        "I threw away my broken pencil the other day. It was pointless.",
    },
    {
      id: 4,
      title: "The Math Book's Problems",
      content:
        "Why did the math book look so sad? Because it had too many problems.",
    },
    {
      id: 5,
      title: "The Skeleton's Instrument",
      content:
        "Why can't a skeleton play music in church? Because it has no organs.",
    },
  ];
  res.json(jokes);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
